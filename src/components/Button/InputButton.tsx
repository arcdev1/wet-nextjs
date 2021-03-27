import type { ButtonVariant } from "./ButtonVariant";
import { ButtonSize } from "./ButtonSize";

export function InputButton({
  variant,
  sizing,
  ...props
}: Omit<React.InputHTMLAttributes<unknown>, "type"> & {
  variant: ButtonVariant;
  sizing?: ButtonSize;
}): JSX.Element {
  const sizeClass = sizing || ButtonSize.DEFAULT;
  return (
    <input
      type="button"
      className={`btn btn-${variant} ${sizeClass}`.trim()}
      {...props}
    />
  );
}
