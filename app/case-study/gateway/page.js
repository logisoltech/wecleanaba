import CtaPair from "../../../components/CtaPair";
import MediaPlaceholder from "../../../components/MediaPlaceholder";

export const metadata = {
  title: "Gateway Pediatric Therapy Case Study",
  description:
    "14 clinics. One standard. How We Clean ABA has supported Gateway Pediatric Therapy's Michigan portfolio since 2018.",
};

export default function GatewayCaseStudyPage() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-w grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              ABA Portfolio | Michigan
            </p>
            <h1 className="text-[2.35rem] leading-[1.1] md:text-5xl lg:text-[3.25rem]">
              14 clinics.
              <br />
              One standard.
            </h1>
            <p className="mt-5 text-lg font-medium">
              Gateway Pediatric Therapy × We Clean ABA
            </p>
            <p className="mt-2 text-muted">Serving the portfolio since 2018.</p>
          </div>
          <div className="animate-fade-up delay-1">
            <MediaPlaceholder label="Gateway Pediatric Therapy" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              The Organization
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Growth changes the cleaning problem.
            </h2>
          </div>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Gateway Pediatric Therapy operates 14 clinics across Michigan, representing more than 90,000 square feet of active treatment space.
            </p>
            <p>As an ABA organization grows, cleaning stops being a building-level problem.</p>
            <p className="font-medium text-foreground">It becomes an operating-system problem.</p>
            <ul className="space-y-2 py-2">
              {[
                "Different centers.",
                "Different buildings.",
                "Different crews.",
                "Different nightly conditions.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-medium text-foreground">
              But one organization—and one standard to protect.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            The Assignment
          </p>
          <h2 className="text-3xl leading-tight md:text-4xl">
            Keep every clinic ready without leadership having to manage the cleaning.
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>That means more than sending someone with a mop.</p>
            <p>
              It means dependable staffing, clear expectations, quality control, communication, backup coverage, correction, and accountability across the portfolio.
            </p>
            <p className="font-medium text-foreground">The standard has to survive scale.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              Since 2018
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              The portfolio changed.
              <br />
              The responsibility didn&apos;t.
            </h2>
          </div>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              As Gateway grew, opened centers, changed facilities, and evolved operationally, We Clean ABA continued supporting the environment behind the organization.
            </p>
            <p>Our responsibility remained simple:</p>
            <p className="font-medium text-foreground">
              Make sure the clinics are ready for the people walking into them tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-w mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            From the Operator
          </p>
          <div className="mt-8">
            <MediaPlaceholder label="Gateway testimonial / video" showPlay />
          </div>
          <blockquote className="mt-8 text-lg leading-relaxed text-muted md:text-xl">
            &ldquo;Not having to worry about how clean our clinic is or the quality of cleanliness has been a huge lift, both for me and for my team.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-w mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            14 clinics don&apos;t need 14 different standards.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            They need one system responsible for maintaining the standard across all of them.
          </p>
          <div className="mt-10">
            <CtaPair align="center" />
          </div>
        </div>
      </section>
    </>
  );
}
