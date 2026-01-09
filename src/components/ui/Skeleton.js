import { cn } from "@site/src/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-gray-200 dark:bg-red-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
