// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { ticketType } from './ticket-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tickets = z.object({
  ticketType: ticketType.optional(),
  ticketLink: z.string().optional(),
});

/**
 *
 * @typedef  {Tickets} tickets
 * @property {TicketType}
 * @property {string}
 */
export type Tickets = z.infer<typeof tickets>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const ticketsResponse = z
  .object({
    ticketType: ticketType.optional(),
    ticketLink: z.string().optional(),
  })
  .transform((data) => ({
    ticketType: data['ticketType'],
    ticketLink: data['ticketLink'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const ticketsRequest = z
  .object({ ticketType: ticketType.nullish(), ticketLink: z.string().nullish() })
  .transform((data) => ({
    ticketType: data['ticketType'],
    ticketLink: data['ticketLink'],
  }));
