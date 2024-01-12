import { MouseEventHandler } from "react";

interface DieProps {
  value: number;
  key: string;
  isHeld: boolean;
  holdDice: MouseEventHandler;
}

function Die( props : DieProps) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
}
  return (
    <div onClick={props.holdDice} style={styles} className="h-[50px] w-[50px] shadow shadow-blue-500/40 rounded flex justify-center items-center cursor-pointer">
      <h2 className="text-2xl">{props.value}</h2>
    </div>
  );
}

export default Die;
