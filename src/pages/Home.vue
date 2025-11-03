<template>
  <section class="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-4 md:px-6
                 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">

    <!-- 切换按钮 -->
    <div class="absolute top-4 right-4">
      <button @click="lang = lang === 'en' ? 'zh' : 'en'" 
              class="px-3 py-1 border rounded">
        {{ lang === 'en' ? '中文' : 'English' }}
      </button>
    </div>

    <!-- 左侧头像 -->
    <div class="mb-6 md:mb-0 md:mr-12 flex justify-center">
      <img
        src="/me.png"
        alt="Profile"
        class="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
      />
    </div>

    <!-- 右侧介绍 -->
    <div class="text-center md:text-left max-w-lg">
      <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{{ t('hello') }}</p>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{{ t('name') }}</h1>
      <h2 class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4">{{ t('role') }}</h2>

      <!-- 按钮 -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
        <a href="/resume.pdf" download class="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base">
          📄 {{ t('cv') }}
        </a>
        <a href="mailto:your.email@example.com" class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm sm:text-base">
          ✉ {{ t('contact') }}
        </a>
      </div>

      <!-- 社交图标 -->
      <div class="flex gap-4 sm:gap-6 justify-center md:justify-start text-xl sm:text-2xl">
        <a href="https://linkedin.com/in/yourprofile" target="_blank">🔗</a>
        <a href="https://github.com/YixiuxiuWang" target="_blank">🐙</a>
        <a href="weixin://dl/chat?yourid">💬</a>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <p class="text-gray-500 dark:text-gray-400 uppercase tracking-wide text-sm sm:text-base">{{ t('browseRecent') }}</p>
      <h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-gray-100">
        {{ t('projects') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ProjectCard
          v-for="(p, i) in homeMessages[props.lang].projectsData"
          :key="i"
          :image="p.image"
          :title="p.title"
          :description="p.description"
          :links="p.links"
        />
      </div>
    </div>
  </section>
 

  <!-- Skills Section -->
  <section class="py-12 sm:py-16 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <p class="text-gray-500 dark:text-gray-400 uppercase tracking-wide text-sm sm:text-base">{{ t('exploreMy') }}</p>
      <h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-gray-100">
        {{ t('skills') }}
      </h2>

      <!-- 两列网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
        <!-- 左边 Skills 卡片 -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{{ t('skills') }}</h3>
          <ul class="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="(s, i) in homeMessages[props.lang].skillsList" :key="i">
              <strong>✔ {{ s.title }}</strong><br />
              {{ s.detail }}
            </li>
          </ul>
        </div>

        <!-- 右边 About Me 卡片 -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{{ t('about') }}</h3>

          <h4 class="font-medium mb-2 text-gray-900 dark:text-gray-100">Experience</h4>
          <ul class="mb-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li v-for="(e, i) in homeMessages[props.lang].experience" :key="i">• {{ e }}</li>
          </ul>

          <h4 class="font-medium mb-2 text-gray-900 dark:text-gray-100">Education</h4>
          <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li v-for="(ed, i) in homeMessages[props.lang].education" :key="i">• {{ ed }}</li>
          </ul>
        </div>
      </div>
    </div>
     </section>
</template>

<script setup lang="ts">
import { onMounted, withDefaults } from "vue"
import ProjectCard from "../components/ProjectCard.vue"
import { homeMessages } from "../locales/home"

const props = withDefaults(defineProps<{
  lang?: 'en' | 'zh'
}>(), {
  lang: 'en'
})

const t = (key: keyof typeof homeMessages['en']) => homeMessages[props.lang][key]

onMounted(() => {
  const media = window.matchMedia("(prefers-color-scheme: dark)")
  function applyTheme(e: MediaQueryListEvent | MediaQueryList) {
    if (e.matches) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
  applyTheme(media)
  media.addEventListener("change", applyTheme)
})
</script>