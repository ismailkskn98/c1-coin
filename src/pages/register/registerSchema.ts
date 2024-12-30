import { z } from "zod";

export const createRegisterSchema = (t: (key: string) => string) => z
  .object({
    firstname: z.string().min(3, t('validation.minName')),
    lastname: z.string().min(3, t('validation.minName')),
    number: z.string().refine((val) => val.length === 10 || val.length === 11, {
      message: t('validation.phoneLength'),
    }),
    email: z.string().email(t('validation.invalidEmail')),
    password: z
      .string()
      .min(6, t('validation.minPassword'))
      .regex(/[A-Z]/, t('validation.passwordUppercase'))
      .regex(/[0-9]/, t('validation.passwordNumber'))
      .regex(/[@$!%*?&]/, t('validation.passwordSpecial')),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: t('validation.passwordMatch'),
    path: ["confirmPassword"],
  });