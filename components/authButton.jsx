import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import UserMenu from './user-menu'

const AuthButton = () => {
  return (
    <div>
        <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding" >
                <Button variant="outline">Login</Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserMenu />
        </SignedIn>
    </div>
  )
}

export default AuthButton