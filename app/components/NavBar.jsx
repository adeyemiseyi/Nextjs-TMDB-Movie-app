import React from 'react'
import NavbarItem from './NavebarItem'


export default function NavBar() {
  return (
    <div className='flex text-stone-100 dark:bg-gray-600 bg-slate-600 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
