// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  gameBoxscoreTeamTeam,
  gameBoxscoreTeamTeamRequest,
  gameBoxscoreTeamTeamResponse,
} from './game-boxscore-team-team';
import {
  gameBoxscoreTeamTeamStats,
  gameBoxscoreTeamTeamStatsRequest,
  gameBoxscoreTeamTeamStatsResponse,
} from './game-boxscore-team-team-stats';
import {
  gameBoxscoreTeamPlayers,
  gameBoxscoreTeamPlayersRequest,
  gameBoxscoreTeamPlayersResponse,
} from './game-boxscore-team-players';
import { onIcePlus, onIcePlusRequest, onIcePlusResponse } from './on-ice-plus';
import { coaches, coachesRequest, coachesResponse } from './coaches';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gameBoxscoreTeam = z.object({
  team: gameBoxscoreTeamTeam.optional(),
  teamStats: gameBoxscoreTeamTeamStats.optional(),
  players: gameBoxscoreTeamPlayers.optional(),
  goalies: z.array(z.number()).optional(),
  skaters: z.array(z.number()).optional(),
  onIce: z.array(z.number()).optional(),
  onIcePlus: z.array(onIcePlus).optional(),
  scratches: z.array(z.number()).optional(),
  penaltyBox: z.array(z.number()).optional(),
  coaches: z.array(coaches).optional(),
});

/**
 *
 * @typedef  {GameBoxscoreTeam} gameBoxscoreTeam
 * @property {GameBoxscoreTeamTeam}
 * @property {GameBoxscoreTeamTeamStats}
 * @property {GameBoxscoreTeamPlayers}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {OnIcePlus[]}
 * @property {number[]}
 * @property {number[]}
 * @property {Coaches[]}
 */
export type GameBoxscoreTeam = z.infer<typeof gameBoxscoreTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameBoxscoreTeamResponse = z
  .object({
    team: gameBoxscoreTeamTeamResponse.optional(),
    teamStats: gameBoxscoreTeamTeamStatsResponse.optional(),
    players: gameBoxscoreTeamPlayersResponse.optional(),
    goalies: z.array(z.number()).optional(),
    skaters: z.array(z.number()).optional(),
    onIce: z.array(z.number()).optional(),
    onIcePlus: z.array(onIcePlusResponse).optional(),
    scratches: z.array(z.number()).optional(),
    penaltyBox: z.array(z.number()).optional(),
    coaches: z.array(coachesResponse).optional(),
  })
  .transform((data) => ({
    team: data['team'],
    teamStats: data['teamStats'],
    players: data['players'],
    goalies: data['goalies'],
    skaters: data['skaters'],
    onIce: data['onIce'],
    onIcePlus: data['onIcePlus'],
    scratches: data['scratches'],
    penaltyBox: data['penaltyBox'],
    coaches: data['coaches'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameBoxscoreTeamRequest = z
  .object({
    team: gameBoxscoreTeamTeamRequest.nullish(),
    teamStats: gameBoxscoreTeamTeamStatsRequest.nullish(),
    players: gameBoxscoreTeamPlayersRequest.nullish(),
    goalies: z.array(z.number()).nullish(),
    skaters: z.array(z.number()).nullish(),
    onIce: z.array(z.number()).nullish(),
    onIcePlus: z.array(onIcePlusRequest).nullish(),
    scratches: z.array(z.number()).nullish(),
    penaltyBox: z.array(z.number()).nullish(),
    coaches: z.array(coachesRequest).nullish(),
  })
  .transform((data) => ({
    team: data['team'],
    teamStats: data['teamStats'],
    players: data['players'],
    goalies: data['goalies'],
    skaters: data['skaters'],
    onIce: data['onIce'],
    onIcePlus: data['onIcePlus'],
    scratches: data['scratches'],
    penaltyBox: data['penaltyBox'],
    coaches: data['coaches'],
  }));
