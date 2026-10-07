import Image from "next/image";
import Link from "next/link";
import CtaPair from "../components/CtaPair";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Stars from "../components/Stars";

const whatWeDo = [
  {
    title: "Clean",
    body: "Daily clinical cleaning built around ABA operations.",
  },
  {
    title: "Inspect",
    body: "Regular quality control catches problems before your team does.",
  },
  {
    title: "Correct",
    body: "When something isn't right, we fix it.",
  },
  {
    title: "Communicate",
    body: "You know what's happening without having to chase us.",
  },
];

const stats = [
  { value: "1.2M+", label: "Square feet serviced" },
  { value: "Multi-Clinic", label: "ABA portfolios" },
  { value: "Since 2018", label: "Serving growing operators" },
];

const clientLogos = [
  { src: "/client-logo.avif", alt: "Client logo" },
  { src: "/operator-logo.avif", alt: "Operator logo" },
  { src: "/partner-logo.avif", alt: "Partner logo" },
  { src: "/clinic-logo.avif", alt: "Clinic logo" },
  { src: "/network-logo.avif", alt: "Network logo" },
  { src: "/portfolio-logo.avif", alt: "Portfolio logo" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad border-b border-border">
        <div className="container-w grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <p className="mb-5 text-[18px] font-normal leading-[1.15] text-[#4a4a4a]">
              For Multi-clinic ABA Operators.
            </p>
            <h1 className="text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-black sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[72px]">
              Controlled
              <br />
              Environments for
              <br />
              Growing ABA
              <br />
              Organizations.
            </h1>
            <p className="mt-6 max-w-lg text-[18px] font-normal leading-[1.45] text-[#4a4a4a]">
              Your clinics shouldn&apos;t be another thing you have to manage.
            </p>
            <ul className="mt-6 max-w-lg space-y-3 text-[0.98rem] leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                Your standards are clear. The execution isn&apos;t always consistent.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                What happens at one center doesn&apos;t always happen at the next.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                You&apos;re ready for a partner who understands ABA, takes ownership, and gets it done.
              </li>
            </ul>
            <div className="mt-8">
              <CtaPair />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 animate-fade-up delay-1">
              <p className="text-sm font-semibold text-foreground">1.2M+ sq. ft. serviced</p>
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-muted">Trusted by ABA operators since 2018</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-up delay-2">
            <MediaPlaceholder label="Operator / clinic environment" showPlay />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-pad">
        <div className="container-w grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              Built for Growing Organizations
            </p>
            <h2 className="max-w-md text-3xl leading-tight md:text-4xl">
              One clinic is manageable.
              <br />
              Ten clinics are a system.
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                More centers mean more people, more vendors, and more opportunities for standards to drift.
              </p>
              <p>
                We build the consistency behind your clinics so the standard doesn&apos;t depend on who&apos;s working that night.
              </p>
              <p className="font-medium text-foreground">
                Clean. Stocked. Ready. Every center. Every morning.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden lg:ml-auto">
            <Image
              src="/2nd-section-woman-image.avif"
              alt="ABA operator managing multi-clinic operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 448px"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad bg-surface">
        <div className="container-w">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              What We Do
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              We take ownership of the environment.
            </h2>
          </div>

          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item, i) => (
              <li key={item.title} className="border-t border-border pt-6">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-xl leading-snug md:text-2xl">
              You run the clinics.
              <br />
              We make sure they look like it.
            </p>
            <Link
              href="/how-it-works"
              className="text-sm font-medium tracking-wide text-foreground underline-offset-4 hover:underline"
            >
              See How It Works →
            </Link>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section-pad">
        <div className="container-w">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              From Your Peers
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">Don&apos;t take our word for it.</h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <MediaPlaceholder label="Operator testimonial video" showPlay />
            <blockquote className="mt-8 text-center text-lg leading-relaxed text-muted md:text-xl">
              &ldquo;Not having to worry about how clean our clinic is or the quality of cleanliness has been a huge lift, both for me and for my team.&rdquo;
            </blockquote>
          </div>

          <div className="mt-14 grid gap-8 border-y border-border py-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-semibold md:text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientLogos.map((logo) => (
              <div key={logo.src} className="relative h-10 w-28 opacity-60 grayscale transition-opacity hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="section-pad bg-surface">
        <div className="container-w grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
              ABA Portfolio | Michigan
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              14 clinics.
              <br />
              One standard.
            </h2>
            <p className="mt-2 text-lg font-medium">Gateway Pediatric Therapy</p>
            <div className="mt-6 max-w-lg space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                Gateway operates 14 clinics across Michigan. We&apos;ve supported their portfolio since 2018 as they&apos;ve grown and expanded.
              </p>
              <p>The assignment has remained the same:</p>
              <p className="font-medium text-foreground">
                Keep every clinic ready without leadership having to manage the cleaning.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/case-study/gateway"
                className="text-sm font-medium tracking-wide underline-offset-4 hover:underline"
              >
                Read the Gateway Case Study →
              </Link>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/gateway.avif"
              alt="Gateway Pediatric Therapy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="section-pad">
        <div className="container-w mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            Partnership
          </p>
          <h2 className="text-3xl leading-tight md:text-4xl">
            We work with multi-clinic ABA organizations that expect things to get done.
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>If you&apos;re looking for the lowest cleaning bid, we&apos;re probably not the right partner.</p>
            <p>
              If you want consistent clinics, clear accountability, and a team that takes ownership of the outcome, let&apos;s talk.
            </p>
          </div>
          <div className="mt-10">
            <CtaPair
              align="center"
              secondaryLabel="Not ready? Request an Operator Review →"
            />
          </div>
        </div>
      </section>
    </>
  );
}
