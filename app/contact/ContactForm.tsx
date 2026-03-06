"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const enquiryTypes = [
  { value: "", label: "Select enquiry type" },
  { value: "training", label: "Training & Certification" },
  { value: "consulting", label: "Consulting & Deployment" },
  { value: "accreditation", label: "Accreditation & Standards" },
  { value: "ai-systems", label: "AI Systems & Automation" },
  { value: "other", label: "Other / General" },
];

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "",
    challenge: "",
    website: "",
  });
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ status: "submitting", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data: Record<string, string> = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok) {
        setState({ status: "success", message: data.message ?? "Message sent." });
        setForm({ name: "", email: "", organisation: "", enquiryType: "", challenge: "", website: "" });
      } else {
        setState({
          status: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again or email info@2ko.co.za directly.",
      });
    }
  };

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl bg-accent/10 border border-accent/20 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="text-4xl mb-4" aria-hidden="true">&#x2713;</div>
        <h3 className="text-text font-semibold text-lg mb-2">Message received</h3>
        <p className="text-muted text-sm leading-relaxed">{state.message}</p>
        <button
          onClick={() => setState({ status: "idle", message: "" })}
          className="mt-6 text-sm text-accent hover:text-accent2 transition-colors underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted2 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
  const labelClass = "block text-sm font-medium text-muted mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
            disabled={state.status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="jane@company.co.za"
            className={fieldClass}
            disabled={state.status === "submitting"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={form.organisation}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Acme Corp"
            className={fieldClass}
            disabled={state.status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="enquiryType" className={labelClass}>
            Enquiry type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={form.enquiryType}
            onChange={handleChange}
            className={`${fieldClass} appearance-none`}
            disabled={state.status === "submitting"}
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="challenge" className={labelClass}>
          What&apos;s your biggest operational challenge? <span className="text-accent">*</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe the problem you're trying to solve — the more specific, the better."
          className={`${fieldClass} resize-none`}
          disabled={state.status === "submitting"}
        />
      </div>

      {state.status === "error" && (
        <div
          className="rounded-xl bg-red-950/30 border border-red-900/40 px-4 py-3 text-sm text-red-400"
          role="alert"
          aria-live="assertive"
        >
          {state.message}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state.status === "submitting"}
        className="w-full sm:w-auto"
      >
        {state.status === "submitting" ? "Sending\u2026" : "Send message"}
      </Button>

      <p className="text-muted2 text-xs">
        We read every message. A consultant will respond within one business day.
      </p>
    </form>
  );
}
