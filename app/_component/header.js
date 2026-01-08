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
                        <li>
                            <div className="navLink w-full h-6 relative flex flex-col overflow-hidden z-20 group  cursor-pointer">
                                <span className='group-hover:translate-y-[-22px] transition-all duration-300'>HOME</span>
                                <span className='group-hover:translate-y-[-24px] transition-all duration-300'>HOME</span>
                            </div>
                        </li>
                        <li>
                            <div className="navLink w-full h-6 relative flex flex-col overflow-hidden z-20 group  cursor-pointer">
                                <span className='group-hover:translate-y-[-22px] transition-all duration-300'>ABOUT </span>
                                <span className='group-hover:translate-y-[-24px] transition-all duration-300'>ABOUT</span>
                            </div>
                        </li>
                        <li>
                            <div className="navLink w-full h-6 relative flex flex-col overflow-hidden z-20 group  cursor-pointer">
                                <span className='group-hover:translate-y-[-22px] transition-all duration-300'>OFFERS</span>
                                <span className='group-hover:translate-y-[-24px] transition-all duration-300'>OFFERS</span>
                            </div>
                        </li>
                        <li>
                            <div className="navLink w-full h-6 relative flex flex-col overflow-hidden z-20 group  cursor-pointer">
                                <span className='group-hover:translate-y-[-22px] transition-all duration-300'>CONTACT</span>
                                <span className='group-hover:translate-y-[-24px] transition-all duration-300'>CONTACT</span>
                            </div>
                        </li>
                    </ul>
                    <button className='border border-amber-200 text-amber-200 px-8 py-2 bg-amber-600/70'>
                        Get App
                    </button>

                </nav>
            </header>
        </>
    )
}
