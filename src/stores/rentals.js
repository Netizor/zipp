
import { defineStore } from 'pinia'
const HISTORY_KEY = 'zypp_history'
export const useRentalStore = defineStore('rentals', {
  state: () => ({ history: JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') }),
  actions: {
    addRide({ start, end, minutes, price }){
      const entry = { id: Date.now(), start, end, minutes, price }
      this.history.unshift(entry)
      localStorage.setItem('zypp_history', JSON.stringify(this.history))
    },
    seedDemo(){
      if (this.history.length) return
      const sample = [
        { start: 'Place de la Comédie', end:'Fac des Lettres', minutes: 12, price: 2.80 },
        { start: 'Gare St-Roch', end:'Antigone', minutes: 9, price: 2.10 },
        { start: 'Odysseum', end:'Port Marianne', minutes: 17, price: 3.60 },
      ]
      this.history = sample.map((s,i)=>({ id: Date.now()-i, ...s }))
      localStorage.setItem('zypp_history', JSON.stringify(this.history))
    }
  }
})
