import { zfd } from "zod-form-data";
import { z } from "zod";

export const contactFormSchema = z.object({
    name: zfd.text(z.string().min(3, { message: 'Name must be at least 3 characters' }).default('')),
    email: zfd.text(z.string().email({ message: 'Invalid email address' }).default('')),
    message: zfd.text(z
      .string()
      .min(10, { message: 'Message must be at least 10 characters' })
      .max(1000, { message: 'Message must be less than 1000 characters' })
      .default('')),
  })
