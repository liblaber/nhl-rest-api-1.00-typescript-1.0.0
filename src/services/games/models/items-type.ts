// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const itemsType = z.enum(['BROADCAST_START', 'BROADCAST_END', 'GOAL', 'PERIOD_END', 'PERIOD_START', 'SHOT']);

export type ItemsType = z.infer<typeof itemsType>;
