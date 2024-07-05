// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { records, recordsRequest, recordsResponse } from './records';

/**
 * The shape of the model inside the application code - what the users use
 */
export const standings = z.object({
  copyright: z.string().optional(),
  records: z.array(records).optional(),
});

/**
 *
 * @typedef  {Standings} standings
 * @property {string}
 * @property {Records[]}
 */
export type Standings = z.infer<typeof standings>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const standingsResponse = z
  .object({
    copyright: z.string().optional(),
    records: z.array(recordsResponse).optional(),
  })
  .transform((data) => ({
    copyright: data['copyright'],
    records: data['records'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const standingsRequest = z
  .object({ copyright: z.string().nullish(), records: z.array(recordsRequest).nullish() })
  .transform((data) => ({
    copyright: data['copyright'],
    records: data['records'],
  }));
