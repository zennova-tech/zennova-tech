'use client';
// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from './Icons/Button';

export default function Footer() {
  const [phone, setPhone] = useState('');
  return (
    <footer className='bg-primary py-10 md:py-12.5 lg:py-12 md:px-12.5 lg:px-0 px-6'>
      <div className='max-w-[1300px] mx-auto bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-[3fr_2fr] '>
        {/* Left: Form */}
        <div className='p-5 md:p-10 lg:p-[50px]'>
          <h2 className='text-lg md:text-3xl font-bold text-primary mb-4'>
            Connect with us to Discuss More?
          </h2>
          <p className='text-gray-600 mb-8 text-sm md:text-base'>
            Get in touch with us. We'd love to hear from you.
          </p>

          <form className='space-y-6'>
            <input
              type='text'
              placeholder='Name'
              className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary'
            />
            <PhoneInput
              country={'in'}
              value={phone}
              placeholder='Phone Number'
              onChange={setPhone}
              inputClass='!w-full !bg-transparent !border-0 !border-b !border-gray-300 !py-2 focus:!border-primary focus:!shadow-none focus:!outline-none'
              buttonClass='!bg-transparent !border-0 !outline-none'
              containerClass='!w-full'
            />
            <textarea
              placeholder='Message'
              rows={4}
              className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary'
            ></textarea>
            <Button buttonText='Send Message' />
          </form>
        </div>

        {/* Right: Find Us */}
        <div className='flex justify-center md:pt-0 md:px-10 p-5 md:p-10 lg:p-[50px]'>
          <div className='w-[387px] md:w-auto h-[332px] md:h-auto rounded-lg bg-primary text-white p-5 md:p-10 lg:p-12'>
            <h3 className='text-2xl md:text-3xl lg:text-[42px] font-semibold mb-8'>
              Find Us
            </h3>
            <div className='space-y-6 text-sm md:text-base'>
              <div className='flex items-start gap-4'>
                <span className='mt-1 flex-shrink-0 w-8 sm:w-8'>
                  <img
                    src='/icons/mail.svg'
                    alt='Email Icon'
                    className='w-full'
                  />
                </span>
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-gray-300 break-words'>
                    info@zennovatech.com
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <span className='mt-1 flex-shrink-0 w-8 sm:w-8'>
                  <img src='/icons/contact.svg' alt='Phone Icon' />
                </span>
                <div>
                  <p className='font-medium'>Phone Number</p>
                  <p className='text-gray-300'>+91 93286 99842</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <span className='mt-1 flex-shrink-0 w-8 sm:w-8'>
                  <img src='/icons/location.svg' alt='Location Icon' />
                </span>
                <div>
                  <p className='font-medium'>Location</p>
                  <p className='text-gray-300'>
                    A-1606, The Capital, Science City Rd, Sola, Ahmedabad,
                    Gujarat 380060
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1300px] pt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
        {/* Brand & Description */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <Image
              src='/zennova.png'
              alt='Zennova'
              width={130}
              height={28}
              className='sm:w-[200px] sm:h-[40px]'
            />
          </div>
          <p className='text-sm lg:text-base mb-5.5 lg:mb-6 text-white '>
            Zennova is a product engineering company, driving start-to-end
            software product development success.
          </p>
          {/* Social icons */}
          <div className='flex gap-4 text-xl mb-5'>
            <a href='#' className='hover:text-secondary'>
              <img
                src='/icons/Instagram.svg'
                width={24}
                height={24}
                className='sm:w-[40px] sm:h-[40px]'
              />
            </a>
            <a href='#' className='hover:text-secondary'>
              <img
                src='/icons/Youtube.svg'
                width={24}
                height={24}
                className='sm:w-[40px] sm:h-[40px]'
              />
            </a>
            <a href='#' className='hover:text-secondary'>
              <img
                src='/icons/Facebook.svg'
                width={24}
                height={24}
                className='sm:w-[40px] sm:h-[40px]'
              />
            </a>
            <a href='#' className='hover:text-secondary'>
              <img
                src='/icons/Whatsapp.svg'
                width={24}
                height={24}
                className='sm:w-[40px] sm:h-[40px]'
              />
            </a>
          </div>
        </div>
        <div className='hidden md:block'></div>

        {/* Services */}
        <div>
          <h3 className='font-semibold mb-2.5 text-secondary'>Services</h3>
          <ul className='space-y-2 text-base text-gray-300 '>
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Software Product Development</li>
            <li>E-Commerce Development</li>
            <li>Mobile App Development</li>
            <li>Software Testing & Q/A</li>
            <li>AI/ML Engineering</li>
            <li>Internet of Things (IoT)</li>
            <li>SaaS Development</li>
          </ul>
        </div>

        {/* Industries */}
        <div className='mt-5 md:mt-0'>
          <h3 className='font-semibold mb-4 text-secondary'>Industries</h3>
          <ul className='space-y-2 text-base text-gray-300'>
            <li>FinTech</li>
            <li>Travel & Hospitality</li>
            <li>Oil & Gas, Mining</li>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Energy and Utilities</li>
            <li>Retail & E-Commerce</li>
            <li>Logistics & Distribution</li>
            <li>Public Sector</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='mt-5 lg:mt-0'>
          <h3 className='font-semibold mb-4 text-secondary'>Quick Links</h3>
          <ul className='space-y-2 text-base text-gray-300'>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/careers'>Why Zennova</Link>
            </li>
            <li>
              <Link href='/openings'>Current Openings</Link>
            </li>
            <li>
              <Link href='/case-studies'>Case Studies</Link>
            </li>
            <li>
              <Link href='/insights'>Insights</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t text-white border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start max-w-[1300px] mx-auto  text-sm'>
        <p>© 2025 ZennovaTech. All rights reserved.</p>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <span className=''>|</span>
          <Link href='/sitemap'>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
