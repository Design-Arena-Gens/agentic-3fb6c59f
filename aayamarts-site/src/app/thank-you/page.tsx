import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white">
      <div className="w-full max-w-xl space-y-6 rounded-3xl border border-white/10 bg-black/60 p-8 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-teal-200">
          Submission received
        </span>
        <h1 className="text-3xl font-semibold">
          Thanks for reaching out to Aayam Arts.
        </h1>
        <p className="text-sm text-slate-200/80">
          Our project producer will review your brief and respond with a tailored
          walkthrough plan, timelines, and pricing within one business day.
        </p>
        <div className="space-y-4 text-sm text-slate-200/70">
          <p>
            Want to talk sooner? Call or WhatsApp our team directly at{" "}
            <a
              href="tel:+919876543210"
              className="text-teal-200 transition hover:text-white"
            >
              +91 98765 43210
            </a>
            .
          </p>
          <p>
            Explore more of our services and case studies while we prepare your
            demo experience.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 sm:w-auto"
          >
            Return to Home
          </Link>
          <a
            href="mailto:hello@aayamarts.com"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:border-teal-200 hover:text-white sm:w-auto"
          >
            Email the Team
          </a>
        </div>
      </div>
    </main>
  );
}
