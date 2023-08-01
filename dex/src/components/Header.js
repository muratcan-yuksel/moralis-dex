import React from "react";
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <div className="headerItem">Swap</div>
        <div className="headerItem">Tokens</div>
      </div>
    </header>
  );
}

export default Header;
