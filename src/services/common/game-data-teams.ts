// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { team, teamRequest, teamResponse } from './team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gameDataTeams = z.object({
  away: team.optional(),
  home: team.optional(),
});

/**
 *
 * @typedef  {GameDataTeams} gameDataTeams
 * @property {Team}
 * @property {Team}
 */
export type GameDataTeams = z.infer<typeof gameDataTeams>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameDataTeamsResponse = z
  .object({
    away: teamResponse.optional(),
    home: teamResponse.optional(),
  })
  .transform((data) => ({
    away: data['away'],
    home: data['home'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameDataTeamsRequest = z
  .object({ away: teamRequest.nullish(), home: teamRequest.nullish() })
  .transform((data) => ({
    away: data['away'],
    home: data['home'],
  }));
