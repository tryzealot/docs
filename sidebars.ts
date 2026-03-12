import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import selfHosted from "./docs/self-hosted/sidebars";
import userGuide from "./docs/user-guide/sidebars";
import developerGuide from "./docs/developer-guide/sidebars";

const sidebars: SidebarsConfig = {
  selfHosted,
  userGuide,
  developerGuide,
};

export default sidebars;
