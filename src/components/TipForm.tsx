import type { Dispatch, SetStateAction } from "react";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};
export const TipForm = ({ setTip, tip }: TipFormProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Tip:</h3>
      <form action="">
        {tipOptions.map((tipOpt) => (
          <div key={tipOpt.id} className="flex gap-2">
            <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOpt.id}
              value={tipOpt.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOpt.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
