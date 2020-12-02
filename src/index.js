import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./Components/Badge";

ReactDOM.render(
  <Badge
    firstName="Lily"
    lastName="Kaufman"
    avatarURL=""
    jobTitle="FrontEnd Engineer"
    twitter="sparragus"
  />,
  document.getElementById("app")
);
