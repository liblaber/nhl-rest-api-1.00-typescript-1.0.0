// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const statusCode = z.enum(['2', '3']);

export type StatusCode = z.infer<typeof statusCode>;
