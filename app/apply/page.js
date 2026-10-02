"use client";

import { useState } from "react";
import Button from "../../components/Button";

const managementOptions = [
  "One provider",
  "Multiple local providers",
  "Independent contractors",
  "Internal staff",
  "Mixed model",
  "Other",
];

const fitPoints = [
  "You operate multiple ABA centers.",
  "You expect consistency across the entire organization.",
  "You're tired of leadership managing cleaners, vendors, and recurring issues.",
  "You care about how your centers feel to staff, families, and visitors.",
  "You value accountability more than simply finding the lowest bid.",
  "And you're looking for a partner who will own the outcome.",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [management, setManagement] = useState([]);

  function toggleManagement(option) {
    setManagement((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-w max-w-3xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            Onboarding
          </p>
          <h1 className="text-[2.35rem] leading-[1.1] md:text-5xl lg:text-[3.25rem]">
            Let&apos;s see if we&apos;re a fit.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              We partner with a limited number of growing, multi-clinic ABA organizations each year.
            </p>
            <p>
              If you&apos;re looking for a team to take ownership of the environment across your centers, tell us a little about your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              Who We&apos;re Built For
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              We Clean ABA may be a fit if:
            </h2>
          </div>
          <ul className="mt-10 max-w-2xl space-y-4">
            {fitPoints.map((point) => (
              <li key={point} className="flex gap-3 text-[1.05rem] leading-relaxed text-foreground">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w max-w-2xl">
          <h2 className="text-3xl leading-tight md:text-4xl">Apply for Onboarding</h2>

          {submitted ? (
            <div className="mt-10 border border-border bg-surface p-8">
              <h3 className="text-xl">Application submitted.</h3>
              <p className="mt-3 text-muted leading-relaxed">
                We review every application personally. If there appears to be a fit, we&apos;ll reach out to schedule a conversation about your portfolio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="organization">Organization</label>
                  <input id="organization" name="organization" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="form-field">
                  <label htmlFor="title">Title / Role</label>
                  <input id="title" name="title" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
                <div className="form-field">
                  <label htmlFor="centers">Number of Centers</label>
                  <input id="centers" name="centers" type="number" min="1" required />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="form-field">
                  <label htmlFor="markets">States / Markets</label>
                  <input id="markets" name="markets" required />
                </div>
                <div className="form-field">
                  <label htmlFor="sqft">
                    Approximate Total Square Footage{" "}
                    <span className="font-normal text-muted">(Optional)</span>
                  </label>
                  <input id="sqft" name="sqft" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="frequency">Current Cleaning Frequency</label>
                <input id="frequency" name="frequency" required />
              </div>
              <fieldset>
                <legend className="mb-3 text-sm font-medium">
                  How is cleaning currently managed?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {managementOptions.map((option) => (
                    <label key={option} className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={management.includes(option)}
                        onChange={() => toggleManagement(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="form-field">
                <label htmlFor="not-working">What isn&apos;t working with your current setup?</label>
                <textarea id="not-working" name="not-working" required />
              </div>
              <div className="form-field">
                <label htmlFor="success">What would a successful partnership look like to you?</label>
                <textarea id="success" name="success" required />
              </div>
              <div className="form-field">
                <label htmlFor="timeline">When would you ideally like to make a change?</label>
                <input id="timeline" name="timeline" required />
              </div>
              <div className="form-field">
                <label htmlFor="else">Anything else we should know?</label>
                <textarea id="else" name="else" />
              </div>
              <Button type="submit" size="lg">
                Submit for Review
              </Button>
              <p className="text-sm leading-relaxed text-muted">
                We review every application personally. If there appears to be a fit, we&apos;ll reach out to schedule a conversation about your portfolio.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            After You Apply
          </p>
          <h2 className="text-3xl leading-tight md:text-4xl">
            No drawn-out sales process.
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              If there appears to be a fit, we&apos;ll schedule a conversation to understand your portfolio, your current setup, and what needs to change.
            </p>
            <p>
              From there, we&apos;ll determine scope, build the operating plan, and map the transition.
            </p>
            <p>If we&apos;re the right partner, we&apos;ll tell you what moving forward looks like.</p>
            <p className="font-medium text-foreground">If we&apos;re not, we&apos;ll tell you that too.</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="container-w mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            Your clinics should reflect the standard of care happening inside them.
          </h2>
          <p className="mt-5 text-lg text-muted">Let&apos;s make sure they do.</p>
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Submit Your Application ↑
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
