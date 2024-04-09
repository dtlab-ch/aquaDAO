import { DHLayout } from "@daohaus/connect";
import { Footer, H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";

export const HomeContainer = () => {
  const location = useLocation();

  return (
    <DHLayout
      leftNav={<H4>aquaDAO</H4>}
      pathname={location.pathname}
      navLinks={[{ label: "aqua", href: `https://aqua-life.surge.sh/` }]}
      footer={<Footer />}
    >
      <Outlet />
    </DHLayout>
  );
};
