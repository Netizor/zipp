
import { defineStore } from 'pinia'
const LS_KEY = 'zypp_user'
export const useAuthStore = defineStore('auth', {
  state: () => ({ user: JSON.parse(localStorage.getItem(LS_KEY) || 'null') }),
  getters: { isAuthenticated: (s) => !!s.user },
  actions: {
    register({ email, password, name }){
      const users = JSON.parse(localStorage.getItem('zypp_users') || '[]')
      if (users.find(u => u.email === email)) throw new Error('Un compte existe déjà avec cet email.')
      const user = { id: Date.now(), email, password, name }
      users.push(user)
      localStorage.setItem('zypp_users', JSON.stringify(users))
      const safe = { id:user.id, email, name }
      localStorage.setItem(LS_KEY, JSON.stringify(safe)); this.user = safe
    },
    login({ email, password }){
      const users = JSON.parse(localStorage.getItem('zypp_users') || '[]')
      const found = users.find(u => u.email === email && u.password === password)
      if (!found) throw new Error('Identifiants invalides.')
      const safe = { id: found.id, email: found.email, name: found.name }
      localStorage.setItem(LS_KEY, JSON.stringify(safe)); this.user = safe
    },
    logout(){ localStorage.removeItem(LS_KEY); this.user = null }
  }
})
