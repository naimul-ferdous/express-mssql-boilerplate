import createError from 'http-errors';

import { Sequelize } from 'sequelize';

import * as config from '@/config/sequelize';


import initModels from '@/database/models/init-models';
import redisClient from '@/libs/redis';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);

const models= initModels(sequelize);

/**
 * POST /checkinouts
 * Create checkinout request
 */
export const createCheckInOut = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    // Create checkinout
    const checkinoutData = { ...req.body, userId };
    const checkinout = await models.checkinout
      .create(checkinoutData, {
        fields: ['userId', 'checkinout'],
      });

    // Save this checkinout to redis
    if (redisClient.connected) {
      redisClient.set(`checkinout:${checkinout.id}`, JSON.stringify(checkinout));
    }
    return res.status(201).json(checkinout);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /checkinouts
 * List checkinouts with pagination
 */
export const getCheckInOuts = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const offset = page * perPage - perPage;

    const checkInOutListResponse = await models.CHECKINOUT
      .findAndCountAll({
        offset,
        limit: perPage,
        // include: {
        //   model: models.user,
        //   attributes: ['id', 'firstName', 'lastName'],
        // },
        // order: [['createdAt', 'DESC']],
      });

    if (redisClient.connected) {
      checkInOutListResponse.rows.forEach((checkinout) => {
        redisClient.set(`checkinout:${checkinout.id}`, JSON.stringify(checkinout));
      });
    }

    const totalPage = Math.ceil(checkInOutListResponse.count / perPage);
    const response = {
      ...checkInOutListResponse, page, totalPage, perPage,
    };
    return res.json(response);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /checkinouts/:id
 * Get checkinout by id
 */
export const getcheckinoutById = async (req, res, next) => {
  try {
    const { id: checkinoutId } = req.params;

    const checkinout = await models.checkinout
      .findOne({
        where: { id: checkinoutId },
        include: {
          model: models.user,
          attributes: ['id', 'firstName', 'lastName'],
        },
      });
    if (!checkinout) {
      return next(createError(404, 'There is no checkinout with this id!'));
    }

    // Save this checkinout to redis
    if (redisClient.connected) {
      redisClient.set(req.cacheName, JSON.stringify(checkinout));
    }
    return res.status(200).json(checkinout);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /checkinouts/:id
 * Delete checkinout request
 */
export const deletecheckinout = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id: checkinoutId } = req.params;

    const checkinout = await models.checkinout.findOne({ where: { id: checkinoutId, userId } });
    if (!checkinout) {
      return next(createError(404, 'There is no checkinout with this id!'));
    }

    // Remove this checkinout from redis, if exist
    if (redisClient.connected) {
      redisClient.del(`checkinout:${checkinoutId}`);
    }
    await checkinout.destroy();
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};
