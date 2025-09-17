// src/stores/auth.js
import { defineStore } from 'pinia'
import { oauthGoogle, oauthApple } from '../services/authProviders'

const LS_KEY = 'zypp_user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem(LS_KEY) || 'null')
  }),
  getters: {
    isAuthenticated: (s) => !!s.user
  },
  actions: {
    // --- OAuth Google ---
    async loginWithGoogle() {
      const u = await oauthGoogle()
      const safe = {
        id: u.uid,
        email: u.email,
        name: u.displayName || 'Utilisateur',
        photo: u.photoURL || null,
        provider: u.providerId
      }
      localStorage.setItem(LS_KEY, JSON.stringify(safe))
      this.user = safe
    },

    // --- OAuth Apple ---
    async loginWithApple() {
      const u = await oauthApple()
      const safe = {
        id: u.uid,
        email: u.email,
        name: u.displayName || 'Utilisateur',
        photo: u.photoURL || null,
        provider: u.providerId
      }
      localStorage.setItem(LS_KEY, JSON.stringify(safe))
      this.user = safe
    },

    // --- Email/Pwd (démo locale existante) ---
    register({ email, password, name }){
      const users = JSON.parse(localStorage.getItem('zypp_users') || '[]')
      if (users.find(u => u.email === email)) throw new Error('Un compte existe déjà avec cet email.')
      const user = { id: Date.now(), email, password, name }
      users.push(user)
      localStorage.setItem('zypp_users', JSON.stringify(users))
      const safe = { id:user.id, email, name }
      localStorage.setItem(LS_KEY, JSON.stringify(safe))
      this.user = safe
    },
    login({ email, password }){
      const users = JSON.parse(localStorage.getItem('zypp_users') || '[]')
      const found = users.find(u => u.email === email && u.password === password)
      if (!found) throw new Error('Identifiants invalides.')
      const safe = { id: found.id, email: found.email, name: found.name }
      localStorage.setItem(LS_KEY, JSON.stringify(safe))
      this.user = safe
    },
    logout(){
      localStorage.removeItem(LS_KEY)
      this.user = null
    }
  }
})
