import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { Nav } from "./styles/NavBar";

const NavBar = ({ setLibraryOpen, libraryOpen }) => {
  return (
    <Nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryOpen(!libraryOpen)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </Nav>
  );
};

export default NavBar;
