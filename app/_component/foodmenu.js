import React from 'react'
import { PiPlus } from 'react-icons/pi'

export default function Foodmenu() {
    return (
        <>
            <section id='foodMenu'>
                {/* =====wrapper===== */}
                <div className='w-full h-full flex justify-center items-center p-5' >
                    <div className='w-full max-w-7xl h-full flex flex-col justify-center items-center gap-12 lg:flex-row'>
                        {/* ---ptoto galary---- */}
                        <div className='w-full lg:w-1/2 max-w-3xl h-full flex flex-wrap'>
                            <div className='w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-1s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-2s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-3s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>

                            <div className='w-1/2 aspect-square relative group overflow-hidden'>
                                <img
                                    src='gallery-4s.jpg'
                                    alt='glaryImage'
                                    className='w-full h-full object-cover group-hover:scale-125 transition-all transition-'
                                />
                                {/* --image overlay-- */}
                                <div className='absolute w-full h-full bg-black/10 top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out'>
                                <span className='text-7xl text-amber-400'><PiPlus /></span>
                                </div>
                            </div>
                        </div>
                        {/* ---==from the menu==---- */}
                        <div className='w-full lg:w-1/2 max-w-3xl h-full'>
                            {/* ----heading---- */}
                            <div>
                                <h3 className='text-2xl font-tangerine'>From the menu</h3>
                                <h2 className='text-4xl'>Special offers</h2>
                            </div>
                            {/* ----menu list---- */}
                            <ul className='pt-8 w-full flex flex-col gap-5'>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0'></div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal breakfast</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600'>$15</span>
                                    </div>
                                </li>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0'></div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal lunch</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600'>$15</span>
                                    </div>
                                </li>
                                <li className='flex justify-between gap-8 items-center'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-24 h-24 bg-amber-600 rounded-full shrink-0'></div>
                                        <div>
                                            <h4 className='text-xl mb-2'>Royal dinner</h4>
                                            <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                                        </div>
                                    </div>
                                    <div className='border-y-2 border-y-amber-600 py-5'>
                                        <span className='text-5xl text-amber-600'>$15</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
