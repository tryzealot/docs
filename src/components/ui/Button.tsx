import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "neutral" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = true,
  className = "",
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  const baseStyles = "hover:cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[var(--color-base-100)] font-semibold";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-[var(--color-primary-content)] border-2 border-transparent hover:opacity-90 focus:ring-[var(--color-primary)] shadow-lg hover:shadow-xl  active:scale-[0.98]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-secondary-content)] border-2 border-transparent hover:opacity-90 focus:ring-[var(--color-secondary)] shadow-md hover:shadow-lg",
    accent: "bg-[var(--color-accent)] text-[var(--color-accent-content)] border-2 border-transparent hover:opacity-90 focus:ring-[var(--color-accent)] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    neutral: "bg-[var(--color-neutral)] text-[var(--color-neutral-content)] border-2 border-transparent hover:opacity-90 focus:ring-[var(--color-neutral)]",
    outline: "bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] focus:ring-[var(--color-primary)]",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`.trim()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

interface PrimaryButtonProps extends Omit<ButtonProps, "variant"> {}

export function PrimaryButton({ className = "", ...props }: PrimaryButtonProps): JSX.Element {
  return <Button variant="primary" className={className} {...props} />;
}

interface SecondaryButtonProps extends Omit<ButtonProps, "variant"> {}

export function SecondaryButton({ className = "", ...props }: SecondaryButtonProps): JSX.Element {
  return <Button variant="secondary" className={className} {...props} />;
}

interface OutlineButtonProps extends Omit<ButtonProps, "variant"> {}

export function OutlineButton({ className = "", ...props }: OutlineButtonProps): JSX.Element {
  return <Button variant="outline" className={className} {...props} />;
}

interface AccentButtonProps extends Omit<ButtonProps, "variant"> {}

export function AccentButton({ className = "", ...props }: AccentButtonProps): JSX.Element {
  return <Button variant="accent" className={className} {...props} />;
}