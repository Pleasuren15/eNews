import React from "react";

export default function News() {
  return (
    <React.Fragment>
      <div className="nav-comp">
        <ul className="nav-comp-ul">
          <li><button>Latest</button></li>
          <li><button>Business</button></li>
          <li><button>Family</button></li>
          <li><button>Health</button></li>
          <li><button>Science</button></li>
          <li><button>Sport</button></li>
          <li><button>More</button></li>
        </ul>
      </div>
    </React.Fragment>
  );
}
