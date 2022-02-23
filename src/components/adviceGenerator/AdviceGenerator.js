import { DiceIcon } from "../../icons/DiceIcon";

export const AdviceGenerator = ({ adviceId }) => {
  return (
    <div className="flex justify-center align-middle -mb-14">
      <button className="w-16 h-16 grid place-items-center  bg-text-secondary rounded-full">
        <DiceIcon />
      </button>
    </div>
  );
};
