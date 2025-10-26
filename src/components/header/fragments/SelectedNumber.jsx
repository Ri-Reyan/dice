import React from 'react';

const SelectedNumber = ({setSelected , selected}) => {
    
    return (
          <div className='place-self-center mt-7 space-x-1 lg:mr-20 lg:mt-14 lg:space-x-5'>
                   <button onClick={() => {setSelected(1)}} className={` text-md border  border-black  h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 1 ? 'bg-black text-white' : 'bg-transparent'}`}>1</button>
                   
                    <button onClick={() => {setSelected(2)}} className={` text-md border  border-black  h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 2 ? 'bg-black text-white' : 'bg-transparent'}`}>2</button>
                   
                    <button onClick={() => {setSelected(3)}} className={` text-md border  border-black h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 3 ? 'bg-black text-white' : 'bg-transparent'}`}>3</button>
                   
                    <button onClick={() => {setSelected(4)}} className={` text-md border  border-black h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 4 ? 'bg-black text-white' : 'bg-transparent'}`}>4</button>
                   
                   
                    <button onClick={() => {setSelected(5)}} className={` text-md border  border-black  h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 5 ? 'bg-black text-white' : 'bg-transparent'}`}>5</button>
                   
                   
                    <button onClick={() => {setSelected(6)}} className={` text-md border  border-black  h-[30px] w-[30px] lg:text-4xl lg:border-2 lg:p-2 lg:h-[60px] lg:w-[60px] lg:border-black lg:rounded-lg ${selected === 6 ? 'bg-black text-white' : 'bg-transparent'}`}>6</button>
                   

                   <h1 className='text-xl font-medium lg:text-4xl lg:font-medium lg:mt-8'>Select your Number</h1>
               </div>
    );
};

export default SelectedNumber;