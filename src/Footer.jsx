
import React from 'react';
import fbImg from './assets/fb.png'
import twitterImg from './assets/twitter.png'
import instaImg from './assets/insta.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row section">
      <div className="flex flex-col w-1/4 gap-4">
        <div className="text-4xl font-black cursor-pointer lg:text-2xl">Travelor</div>
        <div className="">We always make our customers happy by providing as many choices as possible</div>
        <div className="flex gap-2">
          <img src={fbImg} alt='social' className="w-8 h-8" />
          <img src={twitterImg} alt='social' className="w-8 h-8" />
          <img src={instaImg} alt='social' className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">About</div>
        <div className="flex flex-col gap-1">
          <div className="sub">About Us</div>
          <div className="sub">Features</div>
          <div className="sub">News</div>
          <div className="sub">Menu</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Company</div>
        <div className="flex flex-col gap-1">
          <div className="sub">Why Travelor</div>
          <div className="sub">Partner With Us</div>
          <div className="sub">FAQ</div>
          <div className="sub">Blog</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Support</div>
        <div className="flex flex-col gap-1">
          <div className="sub">Account</div>
          <div className="sub">Support Center</div>
          <div className="sub">Feedback</div>
          <div className="sub">Contact Us</div>
          <div className="sub">Accesbility</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Get In Touch</div>
        <div className="flex flex-col gap-1">
          <div className="sub">Question or feeback?</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
