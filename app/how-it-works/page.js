import CtaPair from "../../components/CtaPair";
import Button from "../../components/Button";

const steps = [
  {
    num: "01",
    title: "Diagnostic Assessment",
    subtitle: "Understand the portfolio.",
    body: [
      "We learn your centers, current cleaning setup, recurring problems, internal expectations, and the standard you're trying to maintain.",
      "Before we change anything, we understand what needs to work.",
    ],
  },
  {
    num: "02",
    title: "Stabilization",
    subtitle: "Get the environment under control.",
    body: [
      "We establish crews, correct immediate issues, build backup coverage, align expectations, and stabilize day-to-day execution.",
      "The goal is simple: No surprises when your centers open.",
    ],
  },
  {
    num: "03",
    title: "Standardization",
    subtitle: "Make the standard repeatable.",
    body: [
      "Cleaning protocols. Supplies. Communication. Quality control. Escalation. Accountability.",
      "We create a consistent operating standard across the portfolio so quality doesn't depend on the individual cleaner or center.",
    ],
  },
  {
    num: "04",
    title: "Continuous Oversight",
    subtitle: "Keep it that way.",
    body: [
      "We inspect. We communicate. We correct.",
      "When something slips, our job is to catch it and solve it—not wait for your leadership team to manage us.",
      "You shouldn't have to manage the people you hired to take something off your plate.",
    ],
  },
];

const oversight = [
  "Daily janitorial cleaning",
  "Quality-control inspections",
  "Crew management",
  "Backup coverage",
  "Supply management",
  "Issue correction",
  "Escalation",
  "Periodic floor and carpet care",
  "Window cleaning",
  "Outbreak response",
  "Emergency needs",
];

export const metadata = {
  title: "How It Works",
  description:
    "From first clinic to portfolio-wide control. We build the operating system behind the environment—then manage it for you.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-w max-w-3xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            How It Works
          </p>
          <h1 className="text-[2.35rem] leading-[1.1] md:text-5xl lg:text-[3.25rem]">
            From first clinic to portfolio-wide control.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            <p>We don&apos;t just assign cleaners to your centers.</p>
            <p>
              We build the operating system behind the environment—then manage it for you.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/apply" size="lg">
              Apply for Onboarding
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              The Process
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Four steps. One accountable partner.
            </h2>
          </div>

          <ol className="mt-14 space-y-0">
            {steps.map((step) => (
              <li
                key={step.num}
                className="grid gap-4 border-t border-border py-10 md:grid-cols-[120px_1fr] md:gap-10"
              >
                <p className="font-display text-sm font-semibold tracking-[0.12em] text-muted">
                  {step.num}
                </p>
                <div className="max-w-2xl">
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-2 font-medium text-foreground">{step.subtitle}</p>
                  <div className="mt-4 space-y-3 text-[1.02rem] leading-relaxed text-muted">
                    {step.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              Ongoing Oversight
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              One partner responsible for the outcome.
            </h2>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {oversight.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-t border-border pt-4 text-[0.98rem] text-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-xl text-xl leading-snug md:text-2xl">
            You have one standard.
            <br />
            We manage what it takes to maintain it.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              The Transition
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              We take over without creating another problem for you to manage.
            </h2>
          </div>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Once we understand the portfolio, we build the transition around your centers, your schedules, and your operating requirements.
            </p>
            <ul className="space-y-2.5 py-2">
              {[
                "Crews are established.",
                "Expectations are documented.",
                "Backup coverage is built.",
                "Communication is defined.",
                "Quality control begins.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <p>Then we take responsibility for keeping the system running.</p>
            <p className="font-medium text-foreground">
              The goal isn&apos;t a successful first week. It&apos;s a standard that holds.
            </p>
            <div className="pt-4">
              <CtaPair />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-header text-white">
        <div className="container-w mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            Clean isn&apos;t complicated.
            <br />
            Consistency is.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            That&apos;s what we&apos;re built to manage.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="/apply"
              size="lg"
              className="!bg-white !text-header !border-white hover:!bg-white/90"
            >
              Apply for Onboarding
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
