import { usePaddle } from "@site/src/hooks/usePaddlePrices";
import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Discount } from "@paddle/paddle-node-sdk";

// function DisplayColorMode() {
//   const { colorMode } = useColorMode(); // ✅ 正常工作
//   return <div>当前模式: {colorMode}</div>;
// }

export default function CheckoutPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const priceId = urlParams.get("id");
  const { i18n } = useDocusaurusContext();

  console.log("Language:", i18n.currentLocale); // "en" or "zh-Hans"
  // console.log("Theme:", colorMode); // "light" or "dark"

  const checkoutOptions = {
    checkout: {
      settings: {
        variant: "multi-page",
        locale: i18n.currentLocale,
        allowLogout: false,
        showAddTaxId: false,
      },
    },
  };

  const { paddle } = usePaddle(checkoutOptions);

  useEffect(() => {
    if (!paddle?.Initialized || !priceId) {
      return;
    }

    paddle.Checkout.open({
      customer: { email: "user-cn@example.com" },
      discountCode: "JFEIHALLI7",
      items: [
        {
          priceId: priceId,
          quantity: 1,
        },
      ],
    });
  }, [paddle, priceId]);
}
