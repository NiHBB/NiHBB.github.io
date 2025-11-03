<template>
  <header class="sticky top-0 z-20 border-b bg-base-100/80 backdrop-blur">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center relative">
      <!-- Left: Brand -->
      <RouterLink to="/" class="font-semibold text-lg">Qingpeng Nie</RouterLink>

      <!-- Center: Nav -->
      <nav class="absolute left-1/2 -translate-x-1/2 hidden sm:block">
        <ul class="flex items-center gap-8 text-sm">
          <li><RouterLink to="/about" class="hover:opacity-80">About</RouterLink></li>
          <li><RouterLink to="/projects" class="hover:opacity-80">Projects</RouterLink></li>
          <li><RouterLink to="/skills" class="hover:opacity-80">Skills</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:opacity-80">Contact</RouterLink></li>
        </ul>
      </nav>

      <!-- Right: Actions -->
      <div class="ml-auto flex items-center gap-4 text-sm">
        <!-- Theme switch -->
        <button class="btn btn-ghost btn-square" @click="toggleTheme" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path d="M21.64 13a9 9 0 1 1-10.63-10.6 1 1 0 0 1 1.11 1.45A7 7 0 1 0 20.2 11.9a1 1 0 0 1 1.44 1.1z"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45-1.79l-1.79 1.8 1.41 1.42 1.8-1.8-1.42-1.42zM12 4V1h-2v3h2zm0 19v-3h-2v3h2zm9-9h3v-2h-3v2zM1 12H-2v-2h3v2zm3.34 7.07l1.8-1.8-1.42-1.41-1.8 1.79 1.42 1.42zM18.66 19.07l1.42-1.42-1.8-1.79-1.41 1.41 1.79 1.8zM17 12a5 5 0 1 1-5-5 5 5 0 0 1 5 5z"/></svg>
        </button>

        <!-- Language switch -->
        <button @click="toggleLang" class="inline-flex items-center gap-1 opacity-80 hover:opacity-100" title="Language">
          <span>🌐</span>
          <span class="hidden md:inline">{{ lang === 'en' ? '中文' : 'English' }}</span>
        </button>

        <RouterLink to="/admin" class="inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          <span>👤</span><span>Admin Login</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  lang: 'en' | 'zh'
  toggleLang: () => void
}>()

const isDark = ref(false)
function applyTheme(dark: boolean) {
  isDark.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}
function toggleTheme() { applyTheme(!isDark.value) }
onMounted(() => {
  const saved = localStorage.getItem('theme')
  applyTheme(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
})
</script>