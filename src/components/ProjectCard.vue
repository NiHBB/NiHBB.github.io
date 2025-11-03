<script setup lang="ts">
defineProps<{
  image?: string
  title: string
  description: string
  links?: { label: string; url: string }[]
}>()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
    <!-- 图片 -->
    <img
      v-if="image"
      :src="image"
      alt="project image"
      class="rounded-lg object-cover h-48 w-full mb-4"
    />

    <!-- 标题 -->
    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{{ title }}</h3>

    <!-- 描述 -->
    <p class="text-gray-600 dark:text-gray-300 text-sm flex-grow">{{ description }}</p>

    <!-- 按钮区 -->
    <div class="mt-4 flex flex-wrap justify-center gap-3">
      <a
        v-for="(link, idx) in links"
        :key="idx"
        :href="link.url"
        target="_blank"
        class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>