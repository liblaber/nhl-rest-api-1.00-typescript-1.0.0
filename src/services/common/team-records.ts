// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { teamRecordsTeam, teamRecordsTeamRequest, teamRecordsTeamResponse } from './team-records-team';
import {
  teamRecordsLeagueRecord,
  teamRecordsLeagueRecordRequest,
  teamRecordsLeagueRecordResponse,
} from './team-records-league-record';
import { streak, streakRequest, streakResponse } from './streak';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teamRecords = z.object({
  team: teamRecordsTeam.optional(),
  leagueRecord: teamRecordsLeagueRecord.optional(),
  goalsAgainst: z.number().optional(),
  goalsScored: z.number().optional(),
  points: z.number().optional(),
  divisionRank: z.string().optional(),
  conferenceRank: z.string().optional(),
  leagueRank: z.string().optional(),
  wildCardRank: z.string().optional(),
  row: z.number().optional(),
  gamesPlayed: z.number().optional(),
  streak: streak.optional(),
  lastUpdated: z.string().optional(),
});

/**
 *
 * @typedef  {TeamRecords} teamRecords
 * @property {TeamRecordsTeam}
 * @property {TeamRecordsLeagueRecord}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {Streak}
 * @property {string}
 */
export type TeamRecords = z.infer<typeof teamRecords>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRecordsResponse = z
  .object({
    team: teamRecordsTeamResponse.optional(),
    leagueRecord: teamRecordsLeagueRecordResponse.optional(),
    goalsAgainst: z.number().optional(),
    goalsScored: z.number().optional(),
    points: z.number().optional(),
    divisionRank: z.string().optional(),
    conferenceRank: z.string().optional(),
    leagueRank: z.string().optional(),
    wildCardRank: z.string().optional(),
    row: z.number().optional(),
    gamesPlayed: z.number().optional(),
    streak: streakResponse.optional(),
    lastUpdated: z.string().optional(),
  })
  .transform((data) => ({
    team: data['team'],
    leagueRecord: data['leagueRecord'],
    goalsAgainst: data['goalsAgainst'],
    goalsScored: data['goalsScored'],
    points: data['points'],
    divisionRank: data['divisionRank'],
    conferenceRank: data['conferenceRank'],
    leagueRank: data['leagueRank'],
    wildCardRank: data['wildCardRank'],
    row: data['row'],
    gamesPlayed: data['gamesPlayed'],
    streak: data['streak'],
    lastUpdated: data['lastUpdated'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRecordsRequest = z
  .object({
    team: teamRecordsTeamRequest.nullish(),
    leagueRecord: teamRecordsLeagueRecordRequest.nullish(),
    goalsAgainst: z.number().nullish(),
    goalsScored: z.number().nullish(),
    points: z.number().nullish(),
    divisionRank: z.string().nullish(),
    conferenceRank: z.string().nullish(),
    leagueRank: z.string().nullish(),
    wildCardRank: z.string().nullish(),
    row: z.number().nullish(),
    gamesPlayed: z.number().nullish(),
    streak: streakRequest.nullish(),
    lastUpdated: z.string().nullish(),
  })
  .transform((data) => ({
    team: data['team'],
    leagueRecord: data['leagueRecord'],
    goalsAgainst: data['goalsAgainst'],
    goalsScored: data['goalsScored'],
    points: data['points'],
    divisionRank: data['divisionRank'],
    conferenceRank: data['conferenceRank'],
    leagueRank: data['leagueRank'],
    wildCardRank: data['wildCardRank'],
    row: data['row'],
    gamesPlayed: data['gamesPlayed'],
    streak: data['streak'],
    lastUpdated: data['lastUpdated'],
  }));
