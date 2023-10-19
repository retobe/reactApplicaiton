import React from "react";

const Navbar = () => {
  const navBarItems = ["Home", "About", "Contact"];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {navBarItems.map((item) => (
        <a
          className="nav-item nav-link navbar-brand mb-0 h1"
          href={item.toLowerCase() + "-section"}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
