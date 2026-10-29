import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState, type ChangeEvent } from "react";
import { projectTypes } from "../data";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";
import { InstagramIcon } from "./SocialIcons";

type FormState = {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
  honeypot: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  type: "",
  message: "",
  honeypot: "",
};

export function Contact() {
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const validate = (data: FormState) => {
    const next: Partial<FormState> = {};
    if (data.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Enter a valid email address.";
    if (!data.type) next.type = "Select a project type.";
    if (data.message.trim().length < 10)
      next.message = "Tell us a little more about the project.";
    if (data.honeypot.length > 0) next.honeypot = "Spam check failed.";
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length) {
      setStatus("idle");
      return;
    }
    if (!formspreeEndpoint) {
      setStatus("error");
      setSubmitError(
        "Form delivery is not configured. Please contact contactpegasustech01@gmail.com directly."
      );
      return;
    }
    setStatus("submitting");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          type: form.type,
          message: form.message,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (response.ok) {
        setStatus("success");
        setForm(empty);
      } else {
        console.warn("[Contact Form] Formspree returned non-ok status:", response.status);
        throw new Error("Delivery failed: " + response.status);
      }
    } catch (error) {
      clearTimeout(timeout);
      if (error instanceof Error) {
        console.warn("[Contact Form] Submission error:", error.message);
      }
      setStatus("error");
      setSubmitError(
        "Message could not be sent. Please try again or email contactpegasustech01@gmail.com directly."
      );
    }
  };

  const set =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setStatus("idle");
    };

  return (
    <section id="contact" className="section pt-4">
      <div className="container-pg px-5 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Let&apos;s Talk</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 max-w-sm text-slate-400">
              Have a project in mind? Let&apos;s build something extraordinary
              together.
            </p>

            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="icon-tile">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-slate-500">Email</p>
                  <a
                    href="mailto:contactpegasustech01@gmail.com"
                    className="text-slate-200 hover:text-cyan-300"
                  >
                    contactpegasustech01@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="icon-tile">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-slate-500">Location</p>
                  <p className="text-slate-200">Ahilyanagar, Maharashtra, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="icon-tile">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-slate-500">Contact Numbers</p>
                  <div className="flex flex-col items-start gap-2">
                    <a
                      href="tel:+918421721096"
                      className="text-slate-200 hover:text-cyan-300"
                    >
                      +91 8421721096
                    </a>
                    <a
                      href="tel:+918010926239"
                      className="text-slate-200 hover:text-cyan-300"
                    >
                      +91 8010926239
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="mb-3 text-sm text-slate-500">Email Us Directly</p>
              <a
                href="mailto:contactpegasustech01@gmail.com"
                className="text-cyan-300 hover:text-cyan-400 underline"
              >
                contactpegasustech01@gmail.com
              </a>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm text-slate-500">Follow Us</p>
              <a
                href="https://www.instagram.com/pegasus_tech019/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Pegasus Tech on Instagram"
                className="text-cyan-300 hover:text-cyan-400 underline flex items-center gap-2"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </div>
          </motion.div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-cyan-400/12 bg-[#07111f]/70 p-5 sm:p-7"
          >
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={set("honeypot")}
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              aria-hidden="true"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-slate-300">
                  Name <span className="text-cyan-400">*</span>
                </span>
                <input
                  className="field"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && (
                  <span className="mt-1 block text-xs text-rose-400">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-slate-300">
                  Email <span className="text-cyan-400">*</span>
                </span>
                <input
                  className="field"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  autoComplete="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <span className="mt-1 block text-xs text-rose-400">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-slate-300">Company</span>
                <input
                  className="field"
                  name="company"
                  placeholder="Your company (optional)"
                  value={form.company}
                  onChange={set("company")}
                  autoComplete="organization"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-slate-300">
                  Project type <span className="text-cyan-400">*</span>
                </span>
                <select
                  className="field appearance-none"
                  name="projectType"
                  value={form.type}
                  onChange={set("type")}
                  aria-invalid={!!errors.type}
                  required
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <span className="mt-1 block text-xs text-rose-400">
                    {errors.type}
                  </span>
                )}
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block text-slate-300">
                Message <span className="text-cyan-400">*</span>
              </span>
              <textarea
                className="field min-h-[120px] resize-y"
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={set("message")}
                aria-invalid={!!errors.message}
                required
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-rose-400">
                  {errors.message}
                </span>
              )}
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className={cn("btn-primary", "px-6 py-3 text-sm")}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>
              {status === "error" && submitError && (
                <p className="text-sm text-rose-400" role="alert">
                  {submitError}
                </p>
              )}
              {status === "success" && (
                <p className="text-sm text-cyan-300" role="status">
                  Thanks {form.name.split(" ")[0]}. Your message has been sent
                  to contactpegasustech01@gmail.com.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
