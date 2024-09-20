'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, SearchIcon, UserCircleIcon, MoonIcon, SunIcon } from 'lucide-react'
import ai_image from '../assets/ai_image.jpeg';
import fashion from '../assets/fashion.jpeg'
import climate from '../assets/climate.jpeg'
import remote_work from '../assets/remote-work.jpeg'

export default function MediumClone() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const articles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      excerpt: "Exploring the potential impacts and advancements in AI technology...",
      author: "Jane Doe",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: ai_image,
    },
    {
      id: 2,
      title: "10 Tips for Productive Remote Work",
      excerpt: "Maximize your efficiency while working from home with these strategies...",
      author: "John Smith",
      date: "May 14, 2023",
      readTime: "7 min read",
      image: remote_work,
    },
    {
      id: 3,
      title: "The Rise of Sustainable Fashion",
      excerpt: "How eco-friendly practices are reshaping the fashion industry...",
      author: "Emily Green",
      date: "May 13, 2023",
      readTime: "6 min read",
      image: fashion,
    },
  ]

  const popularTags = ["Technology", "Productivity", "Health", "Design", "Writing"]

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="border-b bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-green-700 dark:text-green-500">Medium</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Our story</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Membership</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Write</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign In</a>
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
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</a>
                </div>
              )}
            </div>
            <Button className="bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2">Get started</Button>
          </div>
        </div>
        {searchOpen && (
          <div className="container mx-auto px-4 py-4">
            <Input
              type="search"
              placeholder="Search Medium"
              className="w-full"
            />
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Featured Article</h2>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <img src={`${climate}?height=400&width=800`} alt="Featured article" className="w-full md:h-[360px] object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">The Impact of Climate Change on Global Economies</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">An in-depth analysis of how climate change is affecting economic systems worldwide...</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>By Alex Johnson</span>
                  <span className="mx-2">·</span>
                  <span>May 16, 2023</span>
                  <span className="mx-2">·</span>
                  <span>10 min read</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="space-y-8">
                {articles.map((article) => (
                  <div key={article.id} className="flex flex-col md:flex-row gap-4">
                    <img src={article.image} alt={article.title} className="w-full md:w-1/3 h-auto object-contain rounded-lg" />
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{article.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>{article.author}</span>
                        <span className="mx-2">·</span>
                        <span>{article.date}</span>
                        <span className="mx-2">·</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="md:w-1/3">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Discover more of what matters to you</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Button key={tag} variant="outline" className="rounded-full">{tag}</Button>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Reading list</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Click the <BookmarkIcon className="inline-block w-5 h-5" /> on any story to easily add it to your reading list or a custom list that you can share.</p>
              <Button className="w-full">Get started</Button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Get the Medium app</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Read stories on the go and get personalized recommendations.</p>
              <div className="flex space-x-4">
                <Button className="flex-1">App Store</Button>
                <Button className="flex-1">Google Play</Button>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Get the latest articles and insights delivered straight to your inbox.</p>
          <form className="flex gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow dark:border-white"
              />
            <Button type="submit">Subscribe</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Medium</h3>
              <p className="text-gray-600 dark:text-gray-300">Every idea needs a Medium.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Help</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2023 Medium Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}