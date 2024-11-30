"use client";
import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the theme is only set once the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not mounted, don't render anything to prevent SSR mismatch
  if (!mounted) {
    return null; // Or you can return a loading indicator here
  }

  // Determine the current theme, either system or user-selected theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer hover:text-slate-700"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer hover:text-slate-700"
        />
      )}
    </div>
  );
}





/*"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'


export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme('light');
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), [])
  return (
    <div>
       {mounted && (currentTheme === 'dark' ? (<MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-slate-700'
        />
   ) : (
         <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-slate-700'
         />
  ))}
    </div>
  );
}
*/