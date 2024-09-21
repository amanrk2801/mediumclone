import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { SearchIcon, MoonIcon, SunIcon } from 'lucide-react';
import UserMenu from './UserMenu';
import AuthModals from './auth/AuthModals';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (searchOpen: boolean) => void;
  userMenuOpen: boolean;
  setUserMenuOpen: (userMenuOpen: boolean) => void;
}

export default function Header({
  darkMode,
  setDarkMode,
  searchOpen,
  setSearchOpen,
  userMenuOpen,
  setUserMenuOpen,
}: HeaderProps) {
  const [showAuthModals, setShowAuthModals] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (type: 'signin' | 'signup') => {
    setAuthType(type);
    setShowAuthModals(true);
  };

  return (
    <header className="border-b bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-700 dark:text-green-500">Medium</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/our-story" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Our story
          </Link>
          <Link to="/membership-plans" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Membership
          </Link>
          <Link to="/write" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Write
          </Link>
          <button
            onClick={() => handleAuthClick('signin')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Sign In
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <UserMenu userMenuOpen={userMenuOpen} setUserMenuOpen={setUserMenuOpen} />
          <Button
            className="bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2"
            onClick={() => handleAuthClick('signup')}
          >
            Get started
          </Button>
        </div>
      </div>
      {showAuthModals && (
        <AuthModals
          initialView={authType}
          onClose={() => setShowAuthModals(false)}
        />
      )}
    </header>
  );
}