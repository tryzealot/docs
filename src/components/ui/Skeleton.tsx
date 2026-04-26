import { cn } from "@site/src/lib/utils";
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps): JSX.Element {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-[var(--color-base-300)]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
