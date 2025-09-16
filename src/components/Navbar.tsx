import Link from 'next/link';
import ChevronDown from './Icons/ChevronDown';

function Navbar() {
  return (
    <header className='bg-primary text-white'>
      <nav className='custom-container py-3'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <img
                className='block h-[40px] w-[200px]'
                src='/zennova.png'
                alt='Workflow'
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden lg:block'>
            <div className='flex items-baseline space-x-5'>
              {/* Services with dropdown */}
              <div className='relative group'>
                <button className='flex items-center text-white hover:text-secondary px-3 py-2  transition-colors duration-200'>
                  Services
                  <ChevronDown />
                </button>
              </div>

              {/* Industries with dropdown */}
              <div className='relative group'>
                <button className='flex items-center text-white hover:text-secondary px-3 py-2  transition-colors duration-200'>
                  Industries
                  <ChevronDown />
                </button>
              </div>

              {/* Case Studies */}
              <Link
                href='/case-studies'
                className='text-white hover:text-secondary px-3 py-2  transition-colors duration-200'
              >
                Case Studies
              </Link>

              {/* Insights */}
              <Link
                href='/insights'
                className='text-white hover:text-secondary px-3 py-2  transition-colors duration-200'
              >
                Insights
              </Link>

              {/* Why Zennova */}
              <Link
                href='/why-zennova'
                className='text-white hover:text-secondary px-3 py-2  transition-colors duration-200'
              >
                Why Zennova
              </Link>

              {/* About */}
              <Link
                href='/about'
                className='text-white hover:text-secondary px-3 py-2  transition-colors duration-200'
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className='hidden md:hidden lg:block'>
            <button className='bg-secondary text-white px-6 py-4 rounded-md  transition-colors duration-200'>
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='block lg:hidden'>
            <button className='text-white hover:text-secondary p-2'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
