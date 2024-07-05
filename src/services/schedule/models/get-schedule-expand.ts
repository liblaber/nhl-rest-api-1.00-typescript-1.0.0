// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const getScheduleExpand = z.enum([
  'schedule.brodcasts',
  'schedule.linescore',
  'schedule.ticket',
  'team.schedule.previous',
]);

export type GetScheduleExpand = z.infer<typeof getScheduleExpand>;
