import type { ButtonVariant } from "./ButtonVariant";
import { ButtonSize } from "./ButtonSize";

export function Button({
  children,
  variant,
  sizing,
}: React.PropsWithChildren<
  React.ButtonHTMLAttributes<unknown> & {
    variant: ButtonVariant;
    sizing?: ButtonSize;
  }
>): JSX.Element {
  const sizeClass = sizing || ButtonSize.DEFAULT;
  return (
    <button className={`btn btn-${variant} ${sizeClass}`.trim()}>
      {children}
    </button>
  );
}
