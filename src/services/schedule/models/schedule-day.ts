// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { scheduleGame, scheduleGameRequest, scheduleGameResponse } from './schedule-game';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scheduleDay = z.object({
  date: z.string().optional(),
  totalItems: z.number().optional(),
  totalEvents: z.number().optional(),
  totalGames: z.number().optional(),
  totalMatches: z.number().optional(),
  games: z.array(scheduleGame).optional(),
  events: z.array(z.any()).optional(),
  matches: z.array(z.any()).optional(),
});

/**
 *
 * @typedef  {ScheduleDay} scheduleDay
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {ScheduleGame[]}
 * @property {any[]}
 * @property {any[]}
 */
export type ScheduleDay = z.infer<typeof scheduleDay>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scheduleDayResponse = z
  .object({
    date: z.string().optional(),
    totalItems: z.number().optional(),
    totalEvents: z.number().optional(),
    totalGames: z.number().optional(),
    totalMatches: z.number().optional(),
    games: z.array(scheduleGameResponse).optional(),
    events: z.array(z.any()).optional(),
    matches: z.array(z.any()).optional(),
  })
  .transform((data) => ({
    date: data['date'],
    totalItems: data['totalItems'],
    totalEvents: data['totalEvents'],
    totalGames: data['totalGames'],
    totalMatches: data['totalMatches'],
    games: data['games'],
    events: data['events'],
    matches: data['matches'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scheduleDayRequest = z
  .object({
    date: z.string().nullish(),
    totalItems: z.number().nullish(),
    totalEvents: z.number().nullish(),
    totalGames: z.number().nullish(),
    totalMatches: z.number().nullish(),
    games: z.array(scheduleGameRequest).nullish(),
    events: z.array(z.any()).nullish(),
    matches: z.array(z.any()).nullish(),
  })
  .transform((data) => ({
    date: data['date'],
    totalItems: data['totalItems'],
    totalEvents: data['totalEvents'],
    totalGames: data['totalGames'],
    totalMatches: data['totalMatches'],
    games: data['games'],
    events: data['events'],
    matches: data['matches'],
  }));
