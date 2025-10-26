import React from 'react';

const Score = ({score}) => {
    return (
                <div className='ml-6 mt-5 lg:ml-20 lg:mt-4'>
                   <h1 className='place-self-center text-3xl lg:text-8xl lg:ml-16 lg:font-semibold'>{score}</h1>
                   <br />
                   <h1 className='place-self-center text-xl whitespace-nowrap relative bottom-6 font-medium lg:text-4xl lg:font-medium'>Total score</h1>
               </div>
    );
};

export default Score;