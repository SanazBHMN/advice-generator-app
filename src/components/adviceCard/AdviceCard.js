import { Advice } from "../advice/Advice";
import { AdviceGenerator } from "../adviceGenerator/AdviceGenerator";
import { AdviceId } from "../adviceId/AdviceId";

export const AdviceCard = () => {
  return (
    <div>
      <AdviceId />
      <Advice />
      <AdviceGenerator />
    </div>
  );
};
