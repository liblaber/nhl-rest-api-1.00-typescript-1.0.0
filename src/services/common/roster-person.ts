// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rosterPerson = z.object({
  id: z.number().optional(),
  fullName: z.string().optional(),
  link: z.string().optional(),
});

/**
 *
 * @typedef  {RosterPerson} rosterPerson
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type RosterPerson = z.infer<typeof rosterPerson>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rosterPersonResponse = z
  .object({
    id: z.number().optional(),
    fullName: z.string().optional(),
    link: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    fullName: data['fullName'],
    link: data['link'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rosterPersonRequest = z
  .object({ id: z.number().nullish(), fullName: z.string().nullish(), link: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    fullName: data['fullName'],
    link: data['link'],
  }));
