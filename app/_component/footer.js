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
                    <div className='w-full max-w-7xl h-full mx-auto flex justify-between text-white'>
                        {/* ====section1==== */}
                        <div className='w-1/4 h-full flex flex-col gap-8'>
                            <img src={`/logo.png`} alt='footer logo' width={'100%'} height={'100%'} />
                            <div className='w-full'>
                                <h5 className='text-2xl'>Opening Hour</h5>
                                <p className='text-base md:text-xl'>
                                    <strong> Monday - Friday: </strong>
                                    08:00 A.M. - 23:00 P.M.
                                </p>
                                <p className='text-base md:text-xl'>
                                    <strong>Weekends :</strong>
                                    08:00 A.M. - 02:00 P.M.
                                </p>
                            </div>
                        </div>
                        {/* ====section2==== */}
                        <div className='w-2/4'>
                            <h5 className='text-2xl'>Opening Hour</h5>
                            <p className='text-base md:text-xl'>
                                <strong> Monday - Friday: </strong>
                                08:00 A.M. - 23:00 P.M.
                            </p>
                            <p className='text-base md:text-xl'>
                                <strong>Weekends :</strong>
                                08:00 A.M. - 02:00 P.M.
                            </p>
                        </div>
                        {/* ====section3==== */}
                        <div className='w-1/4'>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Email: someone@example.mail</li>
                                <li>App Name + Copyright</li>

                                <li>https://claude.ai/public/artifacts/37aaeb12-49a4-4d64-aabd-9b59bb90d99b</li>
                            </ul>
                        </div>
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