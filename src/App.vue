<script setup lang="ts">
import { ref } from "vue"
import NavBar from "./components/NavBar.vue"

const lang = ref<'en' | 'zh'>('en')
const toggleLang = () => {
  lang.value = lang.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <NavBar :lang="lang" :toggleLang="toggleLang" />
  <!-- 关键：把 lang 传给 Home.vue -->
  <RouterView :lang="lang" />
</template>