import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password')
    } else {
      // Here you would typically handle the sign-in process
      console.log('Signing in with:', email, password)
      setError('')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-serif mb-6">Welcome back.</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="mr-2 h-6 w-6" />
            Sign in with Google
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="Facebook logo" className="mr-2 h-6 w-6" />
            Sign in with Facebook
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="Apple logo" className="mr-2 h-6 w-6" />
            Sign in with Apple
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="X logo" className="mr-2 h-6 w-6" />
            Sign in with X
          </Button>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
        </form>
        <p className="mt-6 text-center text-sm">
          No account? <a href="#" className="text-green-600 hover:underline">Create one</a>
        </p>
        <p className="mt-4 text-center text-sm">
          <a href="#" className="text-gray-600 hover:underline">Forgot email or trouble signing in?</a>
        </p>
        <p className="mt-6 text-center text-xs text-gray-500">
          Click "Sign In" to agree to Medium's Terms of Service and acknowledge that Medium's Privacy Policy applies to you.
        </p>
      </div>
    </div>
  )
}