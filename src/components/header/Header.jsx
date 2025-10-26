import React, { useState } from 'react';
import Score from './fragments/Score';
import SelectedNumber from './fragments/SelectedNumber';
import Process from './fragments/Process';

const Header = () => {
  const [selected, setSelected] = useState(null);
  const [random, setRandom] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <div>
      <div className='lg:flex lg:justify-between'>
        <Score score={score} />
        <SelectedNumber selected={selected} setSelected={setSelected} />
      </div>

      <div className='mt-10 lg:mt-14 lg:place-self-center'>
        <Process
          random={random}
          result={result}
          setSelected={setSelected}
          setRandom={setRandom}
          setResult={setResult}
          selected={selected}
          score={score}
          setScore={setScore}
        />
      </div>
    </div>
  );
};

export default Header;
