import { Button } from "@/components/ui/button"
import { UserCircleIcon } from 'lucide-react'

export default function UserMenu({ userMenuOpen, setUserMenuOpen }:any) {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        aria-label="User menu"
      >
        <UserCircleIcon className="h-5 w-5" />
      </Button>
      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
          {['Your Profile', 'Settings', 'Sign out'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
