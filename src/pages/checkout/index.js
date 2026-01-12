import { useEffect, useMemo } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useQuery } from "@tanstack/react-query";
import { useHistory } from "@docusaurus/router";
import { usePaddleClient } from "@site/src/hooks/usePaddlePrices";
import { useGateway } from "@site/src/hooks/useGateway";

function CheckoutClient() {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const urlParams = useMemo(
    () =>
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null,
    []
  );

  const priceId = urlParams?.get("id");
  const discountCode = urlParams?.get("code");
  const quantity = urlParams?.get("quantity") || 1;
  const email = urlParams?.get("email") || "user-cn@example.com";

  const basePath = i18n.currentLocale !== "en" ? `/${i18n.currentLocale}` : "";

  const checkoutOptions = {
    checkout: {
      settings: {
        variant: "multi-page",
        locale: i18n.currentLocale,
        theme: "dark",
        allowLogout: false,
        showAddTaxId: false,
        successUrl: `${basePath}/checkout/success`,
        // displayMode: "inline",
        // frameTarget: "checkout-container",
        // frameStyle: "min-width: 286px; width: 600px; max-width: 600px;",
        // frameInitialHeight: "450",
      },
    },
    eventCallback: (data) => {
      console.log("Paddle Event:", data);
      if (data.name === "checkout.closed") {
        history.push(`${basePath}/pricing`);
      }
    },
  };

  const { paddle } = usePaddleClient(checkoutOptions);
  const { gateway } = useGateway();

  const getCustomerOrders = async () => {
    return gateway.orders(email);
  };

  const query = useQuery({
    queryKey: ["customerOrders"],
    queryFn: getCustomerOrders,
    enabled: !!email && !!gateway,
  });

  useEffect(() => {
    if (
      query.data &&
      query.data.orders.length === 0 &&
      paddle?.Initialized &&
      priceId
    ) {
      paddle.Checkout.open({
        // customer: { email, address: { countryCode: "CN" } },
        discountCode,
        items: [
          {
            priceId,
            quantity,
          },
        ],
      });

      paddle.Spinner.show();
    }
  }, [query.data, paddle, priceId, quantity, discountCode]);

  return (
    <main className="flex flex-col items-center px-4 py-8 gap-10">
      <div className="checkout-container"></div>
      {(query.isLoading || !query.data) && <div>Preparing checkout ...</div>}
      {query.isError && <div>Error loading your orders.</div>}

      {query.data && query.data.orders.length > 0 && (
        <>
          <h1>Your Orders</h1>
          <ul>
            {query.data.orders.map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Amount: {order.amount}, Status:{" "}
                {order.status}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Layout title="Checkout">
      <BrowserOnly fallback={<div>Loading checkout...</div>}>
        {() => <CheckoutClient />}
      </BrowserOnly>
    </Layout>
  );
}
