// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const timeZone = z.object({
  id: z.string().optional(),
  offset: z.number().optional(),
  tz: z.string().optional(),
});

/**
 *
 * @typedef  {TimeZone} timeZone
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type TimeZone = z.infer<typeof timeZone>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const timeZoneResponse = z
  .object({
    id: z.string().optional(),
    offset: z.number().optional(),
    tz: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    offset: data['offset'],
    tz: data['tz'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const timeZoneRequest = z
  .object({ id: z.string().nullish(), offset: z.number().nullish(), tz: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    offset: data['offset'],
    tz: data['tz'],
  }));
