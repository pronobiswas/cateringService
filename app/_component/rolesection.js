import React from 'react'

export default function Rolesection() {
    return (
        <>
            <section
                id='roleSection'
                className='w-full h-full'>
                <div className='w-full h-full  mx-auto flex flex-col lg:flex-row '>
                    {/* ====For Customers===== */}
                    <div className='w-full lg:w-1/2 h-full bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("/food.jpg")] bg-cover bg-center py-20 lg:pt-40 lg:pb-30 flex justify-center lg:justify-end'>
                        <div className='w-full max-w-3xl flex flex-wrap items-center justify-center gap-5 '>
                            <div className="hex-container">
                                <div className="hex">
                                    <div className="hex-inner"> Browse food</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Order homemade & restaurant food</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Place order</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Easy checkout</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Fast delivery / pickup</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Safe payments</div>
                                </div>
                                <div className="hex">
                                    <div className="hex-inner">Get fresh meals</div>
                                </div>
                            </div>
                            <div><button className='px-8 py-1 bg-amber-300'>👉 Download the App</button></div>
                        </div>
                    </div>
                    {/* ====For Chefs===== */}
                    <div className='w-full h-auto lg:w-1/2 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/chef.jpg")] bg-cover bg-center py-20 flex justify-center lg:justify-start'>
                        <div className='w-full max-w-3xl h-fit '>
                            <div className='w-full h-fit flex flex-wrap justify-center gap-x-12 gap-y-2 '>
                                <div className='forChefCard'>
                                    <div className='forChefCardInner'><span>Register as a chef</span></div>
                                </div>
                                <div className='forChefCard'>
                                    <div className='forChefCardInner'><span>Upload dishes</span></div>
                                </div>
                                <div className='forChefCard'>
                                    <div className='forChefCardInner'><span>Set your prices</span></div>
                                </div>
                                <div className='forChefCard'>
                                    <div className='forChefCardInner'><span>Sell your own dishes</span></div>
                                </div>
                                <div className='forChefCard'>
                                    <div className='forChefCardInner'><span>Earn money from cooking</span></div>
                                </div>
                            </div>
                            <div className='w-full h-fit flex justify-center pt-8'>
                                <button className='px-8 py-1 bg-amber-300'>becoe a chef</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
