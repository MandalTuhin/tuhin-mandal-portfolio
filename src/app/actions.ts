"use server";

import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "./components/EmailTemplate";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_SEND_FROM!,
      to: process.env.EMAIL_SEND_TO!,
      subject: "New Message from your Portfolio",
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        message: "Sorry, something went wrong. Please try again.",
        errors: {},
      };
    }

    return { message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      message: "Sorry, something went wrong. Please try again later.",
      errors: {},
    };
  }
}