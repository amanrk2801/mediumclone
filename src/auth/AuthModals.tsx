import { useState, useEffect } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

interface AuthModalsProps {
  initialView: 'signin' | 'signup';
  onClose: () => void;
}

export default function AuthModals({ initialView, onClose }: AuthModalsProps) {
  const [showSignIn, setShowSignIn] = useState(initialView === 'signin')
  const [showSignUp, setShowSignUp] = useState(initialView === 'signup')

  useEffect(() => {
    setShowSignIn(initialView === 'signin')
    setShowSignUp(initialView === 'signup')
  }, [initialView])

  const openSignIn = () => {
    setShowSignIn(true)
    setShowSignUp(false)
  }

  const openSignUp = () => {
    setShowSignUp(true)
    setShowSignIn(false)
  }

  const closeModals = () => {
    setShowSignIn(false)
    setShowSignUp(false)
    onClose()
  }

  return (
    <>
      {showSignIn && (
        <SignInModal 
          onClose={closeModals} 
          onSwitchToSignUp={openSignUp}
        />
      )}

      {showSignUp && (
        <SignUpModal 
          onClose={closeModals} 
          onSwitchToSignIn={openSignIn}
        />
      )}
    </>
  )
}