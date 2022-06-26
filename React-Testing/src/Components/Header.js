import React from "react";

function Header({ title }) {
  return (
    <>
      <h1 >I am Header Compoment {title}</h1>
      <h2 data-testid="header-2" title="Header" >I am Header Compoment CATS</h2>
    </>
  );
}

export default Header;
