import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { auth, googleProvider, githubProvider, signInWithPopup } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

interface SignUpModalProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

export default function SignUpModal({ onClose, onSwitchToSignIn }: SignUpModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (!email || !password) {
      setError('Please enter both email and password')
      setLoading(false)
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      setLoading(false)
      return
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      onClose()
    } catch (error) {
      setError('Failed to create an account. Please try again.')
    }
    setLoading(false)
  }

  const handleSocialSignUp = async (provider: any) => {
    setLoading(true)
    setError('')
    try {
      await signInWithPopup(auth, provider)
      onClose()
    } catch (error) {
      setError('Failed to sign up with social provider.')
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-serif mb-6">Join Medium.</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <Button 
            type="button"
            variant="outline" 
            className="w-full justify-start"
            onClick={() => handleSocialSignUp(googleProvider)}
            disabled={loading}
          >
            <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="mr-2 h-6 w-6" />
            Sign up with Google
          </Button>
          <Button 
            type="button"
            variant="outline" 
            className="w-full justify-start"
            onClick={() => handleSocialSignUp(githubProvider)}
            disabled={loading}
          >
            <img src="/placeholder.svg?height=24&width=24" alt="GitHub logo" className="mr-2 h-6 w-6" />
            Sign up with GitHub
          </Button>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <Input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
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