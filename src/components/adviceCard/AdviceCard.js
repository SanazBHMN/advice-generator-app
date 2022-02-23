import { Advice } from "../advice/Advice";
import { AdviceGenerator } from "../adviceGenerator/AdviceGenerator";
import { AdviceId } from "../adviceId/AdviceId";
import divider from "../../images/pattern-divider-mobile.svg";

export const AdviceCard = () => {
  return (
    <div className="w-11/12 flex flex-col bg-color-secondary px-3 py-6 m-auto rounded-lg sm:w-96">
      <AdviceId />
      <Advice />
      <img src={divider} />
      <AdviceGenerator />
    </div>
  );
};
