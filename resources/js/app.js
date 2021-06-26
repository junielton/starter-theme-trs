import React from "react";
import ReactDOM from "react-dom";

import {ClickCounter} from "./components/ClickCounter";
import {handleMenuMobile} from "./components/Menu";

handleMenuMobile();

console.log("this is working, move on...");

ReactDOM.render(<ClickCounter />, document.getElementById("root"));
