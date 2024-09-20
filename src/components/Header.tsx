import { Button } from "@/components/ui/button"
import { SearchIcon, MoonIcon, SunIcon } from 'lucide-react'
import UserMenu from './UserMenu'

export default function Header({
  darkMode,
  setDarkMode,
  searchOpen,
  setSearchOpen,
  userMenuOpen,
  setUserMenuOpen,
}:any) {
  return (
    <header className="border-b bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-700 dark:text-green-500">Medium</div>
        <nav className="hidden md:flex space-x-4">
          {['Our story', 'Membership', 'Write', 'Sign In'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
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
          <Button className="bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
