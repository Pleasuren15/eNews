import React, { useState } from "react";
import News from "./News";
import Help from "./Help";
import Contact from "./Contact";

export default function NavBar() {
  const [component, setComponent] = useState("News");

  return (
    <React.Fragment>
      <div className="my-nav-bar">
        <h3>eNEWS</h3>

        <ul className="my-nav-bar-ul">
          <li>
            <button onClick={() => setComponent("News")}>News</button>
          </li>
          <li>
            <button onClick={() => setComponent("Help")}>Help</button>
          </li>
          <li>
            <button onClick={() => setComponent("Contacts")}>Contacts</button>
          </li>
        </ul>
      </div>

      <div>
        {component === "News" ? (
          <News />
        ) : component === "Help" ? (
          <Help />
        ) : component === "Contacts" ? (
          <Contact />
        ) : null}
      </div>
    </React.Fragment>
  );
}
