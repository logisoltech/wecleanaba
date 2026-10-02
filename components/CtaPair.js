import Button from "./Button";

export default function CtaPair({
  primaryHref = "/apply",
  primaryLabel = "Apply for Onboarding",
  secondaryHref = "/operator-review",
  secondaryLabel = "Request an Operator Review →",
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "items-center justify-center text-center"
      : "items-start justify-start";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-nowrap ${alignment} ${className}`}>
      <Button href={primaryHref} size="lg" className="shrink-0">
        {primaryLabel}
      </Button>
      <Button href={secondaryHref} variant="secondary" size="lg" className="shrink-0">
        {secondaryLabel}
      </Button>
    </div>
  );
}
