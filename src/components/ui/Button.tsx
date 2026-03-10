import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  isLoading = false,
  fullWidth = true,
  className = "",
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  const baseStyles = "hover:cursor-pointer px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--ifm-color-primary] focus:ring-offset-2 dark:focus:ring-offset-gray-900";

  const variantStyles = {
    primary: "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]",
    secondary: "text-[--ifm-color-primary] bg-white border-2 border-[--ifm-color-primary] shadow-sm hover:shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`.trim()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

interface PrimaryButtonProps extends Omit<ButtonProps, "variant"> {}

export function PrimaryButton({ className = "", ...props }: PrimaryButtonProps): JSX.Element {
  return (
    <Button
      variant="primary"
      className={className}
      style={{
        background: `linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)`,
      }}
      {...props}
    />
  );
}

interface SecondaryButtonProps extends Omit<ButtonProps, "variant"> {}

export function SecondaryButton(props: SecondaryButtonProps): JSX.Element {
  return <Button variant="secondary" {...props} />;
}
