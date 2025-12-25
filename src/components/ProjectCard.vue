<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/composables/useProjects'

type Link = { label: string; url: string }

const props = defineProps<{
  image?: string
  title?: string
  description?: string
  links?: Link[]
  tags?: string[]
  tech?: string[]
  project?: Project
}>()

const viewModel = computed(() => {
  if (props.project) {
    const links: Link[] = []
    if (props.project.links?.demo) links.push({ label: 'Demo', url: props.project.links.demo })
    if (props.project.links?.code) links.push({ label: 'Code', url: props.project.links.code })
    return {
      image: props.project.cover,
      title: props.project.title,
      description: props.project.summary,
      links,
      tags: props.project.tags ?? [],
      tech: props.project.tech ?? [],
    }
  }
  return {
    image: props.image,
    title: props.title,
    description: props.description,
    links: props.links ?? [],
    tags: props.tags ?? [],
    tech: props.tech ?? [],
  }
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col gap-3">
    <!-- 图片 -->
    <img
      v-if="viewModel.image"
      :src="viewModel.image"
      alt="project image"
      class="rounded-lg object-cover h-48 w-full"
    />

    <!-- 标题 -->
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ viewModel.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mt-1">{{ viewModel.description }}</p>
    </div>

    <div class="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
      <span v-for="tag in viewModel.tags" :key="tag" class="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
        {{ tag }}
      </span>
      <span v-for="tech in viewModel.tech" :key="tech" class="px-2 py-1 rounded-full border border-dashed border-gray-300 dark:border-gray-600">
        {{ tech }}
      </span>
    </div>

    <!-- 按钮区 -->
    <div class="mt-auto flex flex-wrap justify-center gap-3 pt-2">
      <a
        v-for="(link, idx) in viewModel.links"
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
