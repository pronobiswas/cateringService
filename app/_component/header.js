import React from 'react'
// bg-[#CC7007] primaryColor
export default function Header() {
  return (
    <>
    <header className='absolute top-0 left-0 w-full h-fit flex justify-center z-50 p-5'>
        <nav className='w-full h-fit max-w-7xl flex items-center justify-between'>
            <div className='w-64'>
                <img src='/logo.png' />
            </div>
            <ul className='flex gap-8 text-amber-300'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Our story</a></li>
                <li><a href='#'>Galary</a></li>
                <li><a href='#'>Services</a></li>
            </ul>
            <button className='border border-amber-200 text-amber-200 px-8 py-2 bg-amber-600/70'>
                Get App
            </button>
            
        </nav>
    </header>
    </>
  )
}
