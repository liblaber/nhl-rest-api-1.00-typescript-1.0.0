// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teamRecordsTeam = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  link: z.string().optional(),
});

/**
 *
 * @typedef  {TeamRecordsTeam} teamRecordsTeam
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type TeamRecordsTeam = z.infer<typeof teamRecordsTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRecordsTeamResponse = z
  .object({
    id: z.number().optional(),
    name: z.string().optional(),
    link: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    link: data['link'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRecordsTeamRequest = z
  .object({ id: z.number().nullish(), name: z.string().nullish(), link: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    link: data['link'],
  }));
