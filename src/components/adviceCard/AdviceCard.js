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
    <div className="w-11/12 flex flex-col bg-color-secondary px-3 py-6 m-auto rounded-lg sm:w-96">
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
