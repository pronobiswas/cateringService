import React from 'react'

export default function Howitworks() {
  return (
    <>
    <section id='howItWorks' className='w-full h-full'>
        <div className='w-full h-full max-w-7xl mx-auto flex'>
            {/* ====For Customers===== */}
            <div className='w-1/2'>
            <div>Browse food</div>
            <div>Place order</div>
            <div>Get fresh meals</div>
            </div>
            {/* ====For Chefs===== */}
            <div className='w-1/2'>
            <div>Register as a chef</div>
            <div>Upload dishes</div>
            <div>Receive orders & earn</div>
            </div>
        </div>
    </section>
    </>
  )
}
