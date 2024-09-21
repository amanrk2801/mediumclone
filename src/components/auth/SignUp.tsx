import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface SignUpModalProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

export default function SignUpModal({ onClose, onSwitchToSignIn }: SignUpModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password')
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long')
    } else {
      // Here you would typically handle the sign-up process
      console.log('Signing up with:', email, password)
      setError('')
      // Simulate successful sign-up
      alert('Sign up successful!')
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-serif mb-6">Join Medium.</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="mr-2 h-6 w-6" />
            Sign up with Google
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/placeholder.svg?height=24&width=24" alt="Facebook logo" className="mr-2 h-6 w-6" />
            Sign up with Facebook
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
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account? <button onClick={onSwitchToSignIn} className="text-green-600 hover:underline">Sign in</button>
        </p>
        <p className="mt-6 text-center text-xs text-gray-500">
          Click "Sign Up" to agree to Medium's Terms of Service and acknowledge that Medium's Privacy Policy applies to you.
        </p>
      </div>
    </div>
  )
}