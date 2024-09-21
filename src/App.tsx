'use client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembershipPage from './components/pages/MembershipPage'
import { useState, useEffect } from 'react'
import { ai_image, fashion, climate, remote_work } from './assets/images'
import Header from '../src/components/Header'
import SearchBar from '../src/components/SearchBar'
import FeaturedArticle from '../src/components/FeaturedArticle'
import LatestArticles from '../src/components/LatestArticles'
import Sidebar from '../src/components/Sidebar'
import NewsletterSection from '../src/components/NewsletterSection'
import Footer from '../src/components/Footer'
import WritePage from './components/pages/WritePage';
import SignInPage from './components/pages/SignInPage';
import OurStoryPage from './components/pages/OurStoryPage';

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

function App() {
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

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Router>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        userMenuOpen={userMenuOpen}
        setUserMenuOpen={setUserMenuOpen}
      />
        <Routes>
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/membership-plans" element={<MembershipPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </Router>

      {searchOpen && <SearchBar />}

      <main className="flex-grow container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <FeaturedArticle image={climate} />

            <LatestArticles articles={articles} />
          </div>

          <Sidebar popularTags={popularTags} />
        </div>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}

export default App

