import type { ButtonVariant } from "./ButtonVariant";
import { ButtonSize } from "./ButtonSize";

export function SubmitButton({
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
      type="submit"
      className={`btn btn-${variant} ${sizeClass}`.trim()}
      {...props}
    />
  );
}
