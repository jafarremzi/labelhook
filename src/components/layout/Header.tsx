import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2 group'>
            <div className='text-2xl font-bold bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent transition-transform group-hover:scale-105'>
              Labelhook
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <Link
              to='/'
              className='text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors'
            >
              محصولات
            </Link>
            <Link
              to='/'
              className='text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors'
            >
              فرصت‌های کسب‌وکار
            </Link>
            <Link
              to='/'
              className='text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors'
            >
              درباره Labelhook
            </Link>
            <a
              href='https://claude.ai/artifact/L2k9vBESf8Zkr5EVTXF7iY'
              target='_blank'
              rel='noopener'
            >
              اسکن پیج
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center gap-4'>
            <a
              href='https://instagram.com/labelhook'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all'
              aria-label='اینستاگرام'
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' />
              </svg>
            </a>
            <a
              href='https://t.me/labelhook'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all'
              aria-label='تلگرام'
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z' />
              </svg>
            </a>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className='p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all'
              aria-label='جستجو'
            >
              <Search size={20} />
            </button>
            <a
              href='https://t.me/labelhook'
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors'
            >
              شروع کنید
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden items-center gap-2'>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className='p-2 text-gray-600 hover:text-purple-600'
              aria-label='جستجو'
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 text-gray-600 hover:text-purple-600'
              aria-label='منو'
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (Expanded) */}
        {searchOpen && (
          <div className='pb-4 animate-fade-in-up'>
            <input
              type='search'
              placeholder='جستجوی برند، دامنه یا دسته‌بندی...'
              className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-gray-100 bg-white animate-fade-in-up'>
          <nav className='px-4 py-4 space-y-3'>
            <Link
              to='/'
              className='block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              محصولات
            </Link>
            <Link
              to='/'
              className='block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              فرصت‌های کسب‌وکار
            </Link>
            <Link
              to='/'
              className='block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors'
              onClick={() => setMobileMenuOpen(false)}
            >
              درباره Labelhook
            </Link>
            {/* Social Links - Mobile */}
            <div className='flex items-center gap-3 px-4 pt-2 border-t border-gray-100 mt-2'>
              <a
                href='https://instagram.com/labelhook'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all'
                aria-label='اینستاگرام'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' />
                </svg>
              </a>
              <a
                href='https://t.me/labelhook'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all'
                aria-label='تلگرام'
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z' />
                </svg>
              </a>
              <span className='text-xs text-gray-400'>@labelhook</span>
            </div>
            <a
              href='https://t.me/labelhook'
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full text-center px-4 py-3 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors'
            >
              شروع کنید
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
