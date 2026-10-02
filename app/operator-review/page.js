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

export default function OperatorReviewPage() {
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
            Operator Review
          </p>
          <h1 className="text-[2.35rem] leading-[1.1] md:text-5xl lg:text-[3.25rem]">
            Before you change anything, let&apos;s look at what you have.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            If cleaning across your portfolio requires too much oversight, produces inconsistent results, or keeps finding its way back onto your team&apos;s plate, we&apos;ll help you identify why.
          </p>
          <div className="mt-8">
            <Button href="#request-review" size="lg">
              Request an Operator Review
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              A Second Set of Eyes
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Find where the system is breaking down.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              We&apos;ll look at how environmental services are currently being managed across your organization, including:
            </p>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Standards",
                body: "Is the expectation actually clear and repeatable across centers?",
              },
              {
                title: "Execution",
                body: "Are centers consistently receiving the service they're supposed to receive?",
              },
              {
                title: "Accountability",
                body: "Who catches problems—and who owns fixing them?",
              },
              {
                title: "Coverage",
                body: "What happens when someone calls off or a crew doesn't show?",
              },
              {
                title: "Oversight",
                body: "How much internal leadership time is being spent managing cleaning?",
              },
              {
                title: "Scalability",
                body: "Will the current system still work as you add centers?",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-border pt-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            This isn&apos;t a sales ambush.
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>You don&apos;t need to be ready to switch providers.</p>
            <p>You don&apos;t need to know exactly what the problem is.</p>
            <p>
              We&apos;ll look at the current setup with you, identify what we&apos;d pay attention to, and tell you where we think the system can be stronger.
            </p>
            <p>If We Clean ABA is a fit, we can talk about that.</p>
            <p className="font-medium text-foreground">
              If not, you&apos;ll still leave with a clearer picture of what needs to improve.
            </p>
          </div>
        </div>
      </section>

      <section id="request-review" className="section-pad scroll-mt-20">
        <div className="container-w max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            Request Your Operator Review
          </p>
          <h2 className="text-3xl leading-tight md:text-4xl">
            Tell us what you&apos;re working with.
          </h2>

          {submitted ? (
            <div className="mt-10 border border-border bg-surface p-8">
              <h3 className="text-xl">Request received.</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Thank you. We&apos;ll review your information and follow up about your Operator Review.
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
              <div className="form-field">
                <label htmlFor="markets">Markets / States</label>
                <input id="markets" name="markets" required />
              </div>
              <div className="form-field">
                <label htmlFor="frequency">How often are your centers currently cleaned?</label>
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
                <label htmlFor="frustration">What&apos;s creating the most frustration right now?</label>
                <textarea id="frustration" name="frustration" required />
              </div>
              <div className="form-field">
                <label htmlFor="else">Anything else we should know?</label>
                <textarea id="else" name="else" />
              </div>
              <Button type="submit" size="lg">
                Request My Operator Review
              </Button>
              <p className="text-sm leading-relaxed text-muted">
                No commitment. No portfolio-wide proposal required. Just a conversation about what&apos;s working, what isn&apos;t, and what we&apos;d do differently.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
