"use client";

import { useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-lg border border-ink/40 bg-white/40 px-5 py-4 text-base outline-none placeholder:text-ink/40 focus:border-ink";

export default function ContactForm() {
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div>
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Type your full name"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Type your e-mail address"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="date">Wedding date (optional)</label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`${fieldClass} [&::-webkit-calendar-picker-indicator]:opacity-40 ${
            date ? "text-ink" : "text-ink/40"
          }`}
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={10}
          required
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full cursor-pointer rounded-lg bg-ink py-4 text-white transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}