
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import BecomeRecharger from '../views/BecomeRecharger.vue'
import NotFound from '../views/NotFound.vue'
import HowItWorks from '../views/HowItWorks.vue'
import Pricing from '../views/Pricing.vue'
import Safety from '../views/Safety.vue'
import FAQ from '../views/FAQ.vue'
import Support from '../views/Support.vue'
import Legal from '../views/Legal.vue'
import Download from '../views/Download.vue'
import { useAuthStore } from '../stores/auth'
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/fonctionnement', name: 'how', component: HowItWorks },
  { path: '/tarifs', name: 'pricing', component: Pricing },
  { path: '/securite', name: 'safety', component: Safety },
  { path: '/faq', name: 'faq', component: FAQ },
  { path: '/support', name: 'support', component: Support },
  { path: '/legal', name: 'legal', component: Legal },
  { path: '/auth', name: 'auth', component: Auth, meta: { guestOnly: true } },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/rechargeur', name: 'rechargeur', component: BecomeRecharger },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
  { path: '/download', name: 'Download', component: Download },
]
const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) return next({ name: 'auth', query: { redirect: to.fullPath } })
  if (to.meta.guestOnly && auth.isAuthenticated) return next({ name: 'dashboard' })
  next()
})
export default router
