import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '@/lib/supabase'

const user = ref<Awaited<ReturnType<typeof supabase.auth.getUser>>['data']['user'] | null>(null)
const loading = ref(true)

export function useAuth() {
  const setCurrent = async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data.user ?? null
    loading.value = false
  }

  onMounted(async () => {
    await setCurrent()
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user ?? null
    })
  })

  onUnmounted(() => {/* nothing to cleanup */})

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/auth/callback' }
    })
  }

  const signInWithApple = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: window.location.origin + '/auth/callback' }
    })
  }

  const signOut = () => supabase.auth.signOut()

  return { user, loading, signInWithGoogle, signInWithApple, signOut }
}
