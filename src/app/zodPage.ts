import { z } from 'zod';

export const userSchema = z.object({
  id: z
    .string()
    .regex(/^\d{9}$/, "תעודת הזהות צריכה להיות מספר בעל 9 ספרות"),
  firstName: z.string().min(2, "שם פרטי חייב להיות לפחות 2 תווים"),
  lastName: z.string().min(2, "שם משפחה חייב להיות לפחות 2 תווים"),
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "תאריך לידה לא חוקי"),
  email: z.string().email("מייל לא חוקי"),
});

export type UserSchema = z.infer<typeof userSchema>;
