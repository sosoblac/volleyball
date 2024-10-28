import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).optional(), // Nullable for OAuth
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  role: z.enum(['ADMIN', 'PLAYER', 'FAN']),
  teamId: z.string().optional(),
  isAdmin: z.boolean().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).optional(), // Nullable for OAuth
});
