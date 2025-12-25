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
  <RouterView v-slot="{ Component }">
    <component :is="Component" :lang="lang" />
  </RouterView>
</template>
