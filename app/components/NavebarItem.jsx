"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavebarItem({ title, param }) {
    const [isClient, setIsClient] = useState(false);
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    // Ensure that useSearchParams only runs on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Or a loading state while waiting for the client
    }

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
}











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
