// src/services/authProviders.js
import {
    GoogleAuthProvider,
    OAuthProvider,
    signInWithPopup,
  } from 'firebase/auth'
  import { auth, hasRealOAuthConfig } from './firebase'
  
  // --- Google ---
  export async function oauthGoogle() {
    if (!hasRealOAuthConfig) {
      // MODE DEMO: génère un user mock local
      return {
        uid: 'demo-google-' + Date.now(),
        displayName: 'Zypp Demo (Google)',
        email: 'demo.google@zypp.local',
        photoURL: 'https://ui-avatars.com/api/?name=Zypp+G',
        providerId: 'google.com',
        demo: true,
      }
    }
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    const u = res.user
    return {
      uid: u.uid,
      displayName: u.displayName,
      email: u.email,
      photoURL: u.photoURL,
      providerId: 'google.com',
    }
  }
  
  // --- Apple ---
  export async function oauthApple() {
    if (!hasRealOAuthConfig) {
      // MODE DEMO
      return {
        uid: 'demo-apple-' + Date.now(),
        displayName: 'Zypp Demo (Apple)',
        email: 'demo.apple@zypp.local',
        photoURL: 'https://ui-avatars.com/api/?name=Zypp+A',
        providerId: 'apple.com',
        demo: true,
      }
    }
    // Apple via Firebase: configurer Apple comme provider dans la console Firebase
    const provider = new OAuthProvider('apple.com')
    provider.addScope('email')
    provider.addScope('name')
    const res = await signInWithPopup(auth, provider)
    const u = res.user
    return {
      uid: u.uid,
      displayName: u.displayName,
      email: u.email,
      photoURL: u.photoURL,
      providerId: 'apple.com',
    }
  }
  