// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { gameEditorialKeywordType } from './game-editorial-keyword-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gameEditorialKeyword = z.object({
  type_: gameEditorialKeywordType.optional(),
  value: z.string().optional(),
  displayName: z.string().optional(),
});

/**
 *
 * @typedef  {GameEditorialKeyword} gameEditorialKeyword
 * @property {GameEditorialKeywordType}
 * @property {string}
 * @property {string}
 */
export type GameEditorialKeyword = z.infer<typeof gameEditorialKeyword>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameEditorialKeywordResponse = z
  .object({
    type: gameEditorialKeywordType.optional(),
    value: z.string().optional(),
    displayName: z.string().optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    value: data['value'],
    displayName: data['displayName'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameEditorialKeywordRequest = z
  .object({ type_: gameEditorialKeywordType.nullish(), value: z.string().nullish(), displayName: z.string().nullish() })
  .transform((data) => ({
    type: data['type_'],
    value: data['value'],
    displayName: data['displayName'],
  }));
