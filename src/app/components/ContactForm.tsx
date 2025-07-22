"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail, type FormState } from "@/app/actions";

const inputClasses =
  "w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200";

const initialState: FormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="w-full rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-pink-600 dark:hover:bg-pink-500"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className={inputClasses}
        />
        {state.errors?.name && <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          className={inputClasses}
        />
        {state.errors?.email && <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className={inputClasses}
        ></textarea>
        {state.errors?.message && <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
      {state.message && (
        <p className={`mt-2 text-sm ${!state.success ? "text-red-500" : "text-green-500"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}