import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");

    // Form service will be connected here later.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setForm(initialForm);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8">
      <div className="mb-7">
        <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
          Send me a message
        </h2>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-xs font-semibold text-slate-700"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="text-xs font-semibold text-slate-700"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="Let's work together"
            required
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-xs font-semibold text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me a little about your project..."
            rows={6}
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Status */}
        {status === "success" && (
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-600">
            ✓ Message sent successfully!
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending..." : "Send Message"}

          {status !== "loading" && <span>→</span>}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
