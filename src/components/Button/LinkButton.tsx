import type { ButtonVariant } from "./ButtonVariant";

export function LinkButton({
  children,
  variant,
  ...props
}: React.PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<unknown>, "href"> & { variant: ButtonVariant }
>): JSX.Element {
  return (
    <a href="#" className={`btn btn-${variant}`} {...props}>
      {children}
    </a>
  );
}
