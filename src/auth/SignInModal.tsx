import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { auth, googleProvider, githubProvider, signInWithPopup } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

interface SignInModalProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

export default function SignInModal({ onClose, onSwitchToSignUp }: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (!email || !password) {
      setError('Please enter both email and password')
      setLoading(false)
      return
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      onClose()
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.')
    }
    setLoading(false)
  }

  const handleSocialSignIn = async (provider: any) => {
    setLoading(true)
    setError('')
    try {
      await signInWithPopup(auth, provider)
      onClose()
    } catch (error) {
      setError('Failed to sign in with social provider.')
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-serif mb-6">Welcome back.</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <Button 
            type="button"
            variant="outline" 
            className="w-full justify-start"
            onClick={() => handleSocialSignIn(googleProvider)}
            disabled={loading}
          >
            <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="mr-2 h-6 w-6" />
            Sign in with Google
          </Button>
          <Button 
            type="button"
            variant="outline" 
            className="w-full justify-start"
            onClick={() => handleSocialSignIn(githubProvider)}
            disabled={loading}
          >
            <img src="/placeholder.svg?height=24&width=24" alt="GitHub logo" className="mr-2 h-6 w-6" />
            Sign in with GitHub
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
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm">
          No account? <button onClick={onSwitchToSignUp} className="text-green-600 hover:underline">Create one</button>
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