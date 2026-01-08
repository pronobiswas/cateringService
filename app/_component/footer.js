import React from 'react'

export default function Footer() {
  return (
    <>
    <footer 
    style={{
        position: "relative",
        backgroundColor: "#0b0e13",
        backgroundImage:
            "url('/footer-bkg-img1.png'), url('/footer-bkg-img2.png')",
        backgroundPosition: "left 60px, right 60px",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto, auto",
        width: "100%",
        paddingTop: "65px",
    }}
    id='footer'>
        <div className='w-full h-fit borer border-amber-600 p-5 py-40'>
            <div className='w-full max-w-7xl h-full mx-auto'>
                {/* ====section1==== */}
                <div className='w-1/3 h-full'>
                <img src={`/logo.png`} alt='footer logo' width={'100%'} height={'100%'}/>
                </div>
                {/* ====section2==== */}
                {/* ====section3==== */}
            </div>
        </div>
    </footer>
    </>
  )
}



// footer-wrapper {
//     position: relative;
//     background-color: #0b0e13;
//     background-image: url(../img/pics/footer-bkg-img1.png), url(../img/pics/footer-bkg-img2.png);
//     background-position: left 60px, right 60px;
//     background-repeat: no-repeat;
//     width: 100%;
//     padding-top: 65px;
// }