// LadoDireito.js

import React, { useEffect, useState } from "react";
import "./ladoDireito.css";

function LadoDireito() {
  const [showPurpleOrb, setShowPurpleOrb] = useState(false);
  const [moveToCenter, setMoveToCenter] = useState(false);

  useEffect(() => {
    const orbs = document.querySelectorAll(".orb");
    const blueOrb = orbs[0];
    const redOrb = orbs[1];

    const handleTransitionEnd = () => {
      setShowPurpleOrb(true);
      setMoveToCenter(true);
    };

    blueOrb.addEventListener("transitionend", handleTransitionEnd);
    redOrb.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      blueOrb.removeEventListener("transitionend", handleTransitionEnd);
      redOrb.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <div className="container">
      <div className={`orb blueOrb ${moveToCenter ? 'moveToCenter' : ''}`}></div>
      <div className={`orb redOrb ${moveToCenter ? 'moveToCenter' : ''}`}></div>
      {showPurpleOrb && <div className="orb purpleOrb"></div>}
    </div>
  );
}

export default LadoDireito;
