// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { abstractGameState } from './abstract-game-state';
import { codedGameState } from './coded-game-state';
import { detailedState } from './detailed-state';
import { statusCode } from './status-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gamesStatus = z.object({
  abstractGameState: abstractGameState.optional(),
  codedGameState: codedGameState.optional(),
  detailedState: detailedState.optional(),
  statusCode: statusCode.optional(),
  startTimeTbd: z.boolean().optional(),
});

/**
 *
 * @typedef  {GamesStatus} gamesStatus
 * @property {AbstractGameState}
 * @property {CodedGameState}
 * @property {DetailedState}
 * @property {StatusCode}
 * @property {boolean}
 */
export type GamesStatus = z.infer<typeof gamesStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gamesStatusResponse = z
  .object({
    abstractGameState: abstractGameState.optional(),
    codedGameState: codedGameState.optional(),
    detailedState: detailedState.optional(),
    statusCode: statusCode.optional(),
    startTimeTBD: z.boolean().optional(),
  })
  .transform((data) => ({
    abstractGameState: data['abstractGameState'],
    codedGameState: data['codedGameState'],
    detailedState: data['detailedState'],
    statusCode: data['statusCode'],
    startTimeTbd: data['startTimeTBD'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gamesStatusRequest = z
  .object({
    abstractGameState: abstractGameState.nullish(),
    codedGameState: codedGameState.nullish(),
    detailedState: detailedState.nullish(),
    statusCode: statusCode.nullish(),
    startTimeTbd: z.boolean().nullish(),
  })
  .transform((data) => ({
    abstractGameState: data['abstractGameState'],
    codedGameState: data['codedGameState'],
    detailedState: data['detailedState'],
    statusCode: data['statusCode'],
    startTimeTBD: data['startTimeTbd'],
  }));
