// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const awayLeagueRecord2 = z.object({
  wins: z.number().optional(),
  losses: z.number().optional(),
  ot: z.number().optional(),
  type_: z.string().optional(),
});

/**
 *
 * @typedef  {AwayLeagueRecord2} awayLeagueRecord2
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 */
export type AwayLeagueRecord2 = z.infer<typeof awayLeagueRecord2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const awayLeagueRecord2Response = z
  .object({
    wins: z.number().optional(),
    losses: z.number().optional(),
    ot: z.number().optional(),
    type: z.string().optional(),
  })
  .transform((data) => ({
    wins: data['wins'],
    losses: data['losses'],
    ot: data['ot'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const awayLeagueRecord2Request = z
  .object({
    wins: z.number().nullish(),
    losses: z.number().nullish(),
    ot: z.number().nullish(),
    type_: z.string().nullish(),
  })
  .transform((data) => ({
    wins: data['wins'],
    losses: data['losses'],
    ot: data['ot'],
    type: data['type_'],
  }));
