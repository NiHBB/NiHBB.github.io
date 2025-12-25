<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProjects } from '@/composables/useProjects'
import Fuse from 'fuse.js'
import { useHead } from '@unhead/vue'
import ProjectCard from '@/components/ProjectCard.vue'

useHead({ title: 'Projects · Portfolio' })

const { list } = useProjects()
const q = ref('')
const activeTag = ref<string | null>(null)

const tags = computed(() => Array.from(new Set(list.flatMap(p => p.tags || []))).sort())

const fuse = new Fuse(list, { keys: ['title', 'summary', 'tags', 'tech'], threshold: 0.35 })

const filtered = computed(() => {
  const base = activeTag.value ? list.filter(p => p.tags?.includes(activeTag.value!)) : list
  if (!q.value.trim()) return base
  const ids = new Set(fuse.search(q.value).map(r => r.item.slug))
  return base.filter(p => ids.has(p.slug))
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Projects</h1>
    <div class="flex flex-wrap gap-3 items-center mb-6">
      <input v-model="q" placeholder="搜索关键词…" class="border rounded-xl px-4 py-2 flex-1 min-w-[220px]" />
      <div class="flex flex-wrap gap-2">
        <button class="px-3 py-1 rounded-full border" :class="!activeTag ? 'font-semibold' : ''" @click="activeTag = null">全部</button>
        <button v-for="t in tags" :key="t" class="px-3 py-1 rounded-full border" :class="activeTag===t ? 'font-semibold' : ''" @click="activeTag = t">{{ t }}</button>
      </div>
    </div>

    <div v-if="filtered.length" class="grid md:grid-cols-2 gap-6">
      <ProjectCard v-for="p in filtered" :key="p.slug" :project="p" />
    </div>
    <p v-else class="text-sm text-gray-500">暂无匹配的项目。</p>
  </section>
</template>
