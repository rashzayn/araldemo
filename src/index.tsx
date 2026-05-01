import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AralSchoolHomepage } from "./screens/AralSchoolHomepage/AralSchoolHomepage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AralSchoolHomepage />
  </StrictMode>,
);
