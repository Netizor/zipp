// src/services/firebase.js
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let app = getApps().length ? getApps()[0] : initializeApp(config)
export const auth = getAuth(app)

// Petit helper pour savoir si on a des clés -> vrai OAuth ou mode démo
export const hasRealOAuthConfig = Boolean(
  config.apiKey && config.authDomain && config.projectId && config.appId
)
