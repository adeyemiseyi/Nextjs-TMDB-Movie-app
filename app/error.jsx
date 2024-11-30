'use client';
import { useEffect } from 'react';

export default function Error({ erro, reset }) {  
    useEffect(() => {
        console.log(erro);  
    }, [erro]); 

  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong, Please try again later.</h1>
        <button className='hover:text-slate-600' onClick={() => reset()}>Try Again</button>
    </div>
  );
}






/*'use client'
import { useEffect } from 'react';

export default function error({ erro, reset }) {
    useEffect(() => {
        console.log(error)
    }, {error});
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong, Please try again later,</h1>
        <button className='hover:text-slate-600' onClick={() => reset()}>Tray Again</button>
    </div>
  );
}
*/