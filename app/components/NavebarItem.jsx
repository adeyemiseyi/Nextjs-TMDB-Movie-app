"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavebarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    return (
        <div>
            <Link
                className={`hover:text-slate-400 
                        font-semibold ${
                        genre === param
                            ? "underline decoration-4 underline-offset-8 decoration-slate-300 rounded-lg"
                            : ""
                    }`} 
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
};

// Make sure to wrap your component in Suspense when it's used
const MyPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NavebarItem title="My Title" param="action" />
  </Suspense>
);

export default MyPage;











/*"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavebarItem({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
        <Link
            className={`hover:text-slate-400 
                    font-semibold ${
                    genre === param 
                    ? "underline decoration-4 underline-offset-8  decoration-slate-300 rounded-lg" 
                    : ""
                }`} 
            href={`/?genre=${param}`}
            >
                {title}
        </Link>    
     </div>
  )
}
  */
