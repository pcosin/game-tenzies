import Die from "./components/Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const [dice, setDice] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setStep(() => step + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        })
      );
    } else {
      setTenzies(false);
      setStep(0);
      setDice(allNewDice());
    }
  }

  function holdDice(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        if (id === die.id) {
          return { ...die, isHeld: !die.isHeld };
        }
        return die;
      })
    );
  }

  return (
    <main className="grid place-items-center p-4">
      {tenzies && <ConfettiExplosion />}
      <section className="bg-gray-200 min-w-96 h-full p-6 rounded flex justify-center flex-col">
        <h1 className="text-center text-2xl mb-4">Tenzies</h1>
        <p className="text-center">Roll until all dice are the same.</p>
        <p className="text-center mb-6">
          Click each die to freeze it at its current value between rolls.
        </p>
        <div className="grid grid-cols-5 gap-4">
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
          ))}
        </div>
        <button
          onClick={rollDice}
          className="bg-blue-300 w-[100px] p-2 mt-5 rounded text-white text-2xl mx-auto hover:text-blue-300 hover:bg-black">
          {tenzies ? "New Game" : "Roll"}
        </button>
        {tenzies ? (
          <div className="py-6">
            You took
            <span className="text-xl font-bold text-blue-500 "> {step} </span>{" "}
            steps to win
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
}

export default App;
