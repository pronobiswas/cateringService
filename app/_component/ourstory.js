import React from 'react'

export default function Ourstory() {
    return (
        <>
            <section id='ourStory'>
                <div className='w-full h-screen bg-[url("/bkg-img1.jpg")] flex items-center justify-center py-40'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-1/4 flex justify-end'>
                        <img 
                        className='aspect-157/332'
                        src='/spices-left.png' />
                        </div>
                        <div className='w-full h-full flex flex-col justify-center items-center max-w-xl bg-[url("/bkg-img2.png")] bg-cover bg-center border-[20px] text-center'>
                            <h3 className='text-3xl'>Our story</h3>
                            <h2 className='text-5xl' >Love for food</h2>
                            <div className='w-full p-5 flex items-center justify-center'>
                                <div className='w-36 h-[2px] bg-amber-200'></div>
                                <div className='w-5 h-5 rounded-full border border-amber-200 shrink-0 flex justify-center items-center'>
                                    <div className='w-2 h-2 bg-amber-200 rounded-full' ></div>
                                </div>
                                <div className='w-36 h-[2px] bg-amber-200'></div>
                            </div>
                            <p className='text-gray-400 w-full max-w-96'>Welcome. This is Royal plate. Elegant & sophisticated restaurant template. Royal plate offers different home page layouts with smart and unique design, showcasing beautifully designed elements every restaurant website should have. Smooth animations, fast loading and engaging user experience are just some of the features this template offers.
                                So, give it a try and dive into a world of royal restaurant websites.</p>
                        </div>
                        <div className='w-1/4'>
                            
                        <img src='/spices-right.png' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
