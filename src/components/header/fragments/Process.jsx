import React from 'react';
import dice1 from '../../../assets/dice_1.png';
import dice2 from '../../../assets/dice_2.png';
import dice3 from '../../../assets/dice_3.png';
import dice4 from '../../../assets/dice_4.png';
import dice5 from '../../../assets/dice_5.png';
import dice6 from '../../../assets/dice_6.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Process = ({ selected, random, setSelected, setRandom, setResult, score, setScore }) => {
  const allDice = [dice1, dice2, dice3, dice4, dice5, dice6];
  const DiceSrc = random ? allDice[random - 1] : dice1;

  const showToastWinMessage = () => {
    toast.success("🎉 You Win!", { position: "bottom-right" });
  };

  const showToastLossMessage = () => {
    toast.error("❌ You Lose!", { position: "bottom-right" });
  };

  const rollDice = () => {
    const newRandom = Math.floor(Math.random() * 6) + 1; // 1–6
    setRandom(newRandom);

    const isWin = selected === newRandom;
    setResult(isWin);

    if (isWin) {
      setScore(score + 1);
      showToastWinMessage();
    } else {
      showToastLossMessage();
    }

    // auto-reset after 1.5s
    setTimeout(() => {
      setSelected(null);
      setRandom(null);
      setResult(null);
    }, 1500);
  };

  return (
    <div className='place-items-center'>
      <img className='h-[100px] w-auto  lg:h-auto lg:w-auto' src={DiceSrc} alt="Roll the dice" />
      <h1 className='text-xl lg:text-3xl lg:place-self-center lg:tracking-tighter'>Click on Button to roll</h1>
      <button
        onClick={rollDice}
        className=' text-xl bg-black text-white p-2 rounded ml-[150px] lg:text-2xl lg:font-semibold lg:bg-zinc-900 lg:rounded-xl lg:text-white lg:p-2 lg:ml-24'
      >
        Play
      </button>
      <ToastContainer />
    </div>
  );
};

export default Process;
