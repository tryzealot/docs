import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Root({ children }) {
  const env = process.env.ENVIRONMENT || "production";
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
      {env === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
