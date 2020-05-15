import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./component/Ts/Home";

ReactDOM.render(
    <Home name="TypeScript" level= {10} />,
    document.getElementById("app")
);