// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const typeDisplayName = z.enum([
  'byDayOfWeek',
  'byMonth',
  'goalsByGameSituation',
  'homeAndAway',
  'onPaceRegularSeason',
  'regularSeasonStatRankings',
  'statsSingleSeason',
  'vsConference',
  'vsDivision',
  'vsTeam',
  'winLoss',
]);

export type TypeDisplayName = z.infer<typeof typeDisplayName>;
