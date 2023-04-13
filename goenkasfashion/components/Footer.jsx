import React from 'react'

function Footer() {
    return (
        <footer className='w-full mt-auto overflow-hidden'>
            <div className='bg-slate-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6'>
                <div className='m-2 w-56 sm:w-64'>
                    <h1 className='text-slate-100 font-bold text-2xl'>ABERDEEN BAZAR</h1>
                    <p className='text-sm text-slate-200 my-10'>MB 80, RK COMPLEX 1st FLOOR,
                        BERDEEN BAZAR, PORT BLAIR,
                        SOUTH ANDAMAN,
                        ANDAMAN AND NICOBAR ISLAND
                        PIN 744101</p>

                    <p className='text-slate-200 font-bold text-1xl'> PH NO 9609573939</p>
                </div>
                <div className='m-2 w-56 sm:w-64'>
                    <h1 className='text-slate-100 font-bold text-2xl'>BHATU BASTI</h1>
                    <p className='text-sm text-slate-200 my-10'>GROUND FLOOR,
                        NEAR AXIS BANK, BHATU BASTI,
                        PORT BLAIR, SOUTH ANDAMAN,
                        ANDAMAN AND NICOBAR ISLAND,
                        PIN 744105,</p>

                    <p className='text-slate-200 font-bold text-1xl'>PH NO 9609144003</p>
                </div>
                <div className='m-2 w-56 sm:w-64'>
                    <h1 className='text-slate-100 font-bold text-2xl'>BAMBOOFLAT JETTY</h1>
                    <p className='text-sm text-slate-200 my-10'>NEAR BAMBOOFLAT JETTY, BAMBOOFLAT,
                        PORT BLAIR, SOUTH ANDAMAN,
                        ANDAMAN AND NICOBAR ISLAND,
                        PIN 744107</p>

                    <p className='text-slate-200 font-bold text-1xl'>PH NO 9609017300</p>
                </div>
                <div className='m-2  w-56 sm:w-64'>
                    <h1 className='text-slate-100 font-bold text-2xl'>DURGA MARKET</h1>
                    <p className='text-sm text-slate-200 my-10'>1st FLOOR, NEW DURGA MARKET,
                        MADHUPUR ROAD, DIGLIPUR,
                        NORTH AND MIDDLE ANDAMAN,
                        ANDAMAN AND NICOBAR,
                        PIN 744202</p>

                    <p className='text-slate-200 font-bold text-1xl'> PH NO 9609133009</p>
                </div>

            </div>
            <div className='bg-slate-800 grid justify-center items-center text-center py-5'>
                <h1 className='text-slate-200 mb-2'>
                    All rights reserved | <a href="https://www.goenkasfashion.com">
                        goenkasfashion.com |
                    </a>
                </h1>
                <h1 className='text-slate-300'>
                    &#169;2022 Goenkas Fashion
                </h1>
            </div>
        </footer>
    )
}

export default Footer