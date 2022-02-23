import { DiceIcon } from "../../icons/DiceIcon";

export const AdviceGenerator = ({ handleClick }) => {
  return (
    <div className="flex justify-center align-middle -mb-14 mt-6">
      <button
        className="w-16 h-16 grid place-items-center  bg-text-secondary rounded-full"
        onClick={handleClick}
      >
        <DiceIcon />
      </button>
    </div>
  );
};
