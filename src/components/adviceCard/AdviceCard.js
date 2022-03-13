import { useState } from "react";
import { Advice } from "../advice/Advice";
import { AdviceGenerator } from "../adviceGenerator/AdviceGenerator";
import { AdviceId } from "../adviceId/AdviceId";
import mobileDivider from "../../images/pattern-divider-mobile.svg";
import desktopDivider from "../../images/pattern-divider-desktop.svg";

export const AdviceCard = () => {
  const [adviceId, setAdviceId] = useState("");
  const [advice, setAdvice] = useState("");

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      });
  };

  return (
    <div className="max-w-xs flex flex-col bg-color-secondary px-3 py-6 mx-auto mb-14 rounded-lg sm:max-w-md">
      <AdviceId adviceId={adviceId} />
      <Advice advice={advice} />
      <div className="block sm:hidden">
        <img src={mobileDivider} />
      </div>
      <div className="hidden sm:block">
        <img src={desktopDivider} />
      </div>
      <AdviceGenerator handleClick={handleClick} />
    </div>
  );
};
