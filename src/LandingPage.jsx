
import React from 'react';
import backgroundImg from './assets/backgrounImg.jpg'
import walkingMan from './assets/man.png'
import optionsImg from './assets/options.png'
import guideImg from './assets/guide.png'
import bookingImg from './assets/booking.png'

const LandingPage = () => {
  return (
    <div>
      <div className="flex py-16 section">
        <div className="flex flex-col gap-8 text-center lg:w-1/2 lg:text-left">
          <div className="text-5xl font-bold ">We Take Care Of Your Trip</div>
          <div className="text-gray-500 lg:w-2/3">To get the best of your adventure you just need to leave and go where to want. We are waiting for you.</div>
          <div className="flex items-center justify-center gap-5 lg:justify-normal">
            <div className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-full cursor-pointer">Plan a Trip</div>
            <img className="w-[40px] h-[40px] rounded-full cursor-pointer" src={backgroundImg} alt='Img' />
            <div>Watch Our Story</div>
          </div>
        </div>
        <img className="hidden w-1/2 h-auto rounded-lg lg:block" src={backgroundImg} alt='Img' />
      </div>
      <div className="flex text-white section bg-slate-800">
        <div className="relative hidden w-1/4 lg:block">
          <img className='absolute top-[-120px] right-[50px]  w-[250px] h-auto pointer-events-none' src={walkingMan} alt="" />
        </div>
        <div className='w-full lg:w-3/4'>
          <div className='flex flex-col'>
            <div className="text-2xl font-bold">Top Value For You</div>
            <div className="pb-4 border-b border-dashed">Try a variety of benefits when trying our services</div>
          </div>
          <div className="flex flex-col justify-between gap-6 pt-5 md:flex-row">
            <div className="flex gap-2">
              <img className="w-[30px] h-[30px] rounded-full" src={optionsImg} alt='icon' />
              <div className="flex flex-col">
                <div className="text-lg font-bold">Lot Of Choices</div>
                <div className="w-full text-sm ">Total 350+ destination we work with.</div>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="w-[30px] h-[30px] rounded-full" src={guideImg} alt='icon' />
              <div className="flex flex-col">
                <div className="text-lg font-bold">Best Tour Guide</div>
                <div className="w-full text-sm ">Total 350+ destination we work with.</div>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="w-[30px] h-[30px] rounded-full" src={bookingImg} alt='icon' />
              <div className="flex flex-col">
                <div className="text-lg font-bold">Easy Booking</div>
                <div className="w-full text-sm ">Total 350+ destination we work with.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
