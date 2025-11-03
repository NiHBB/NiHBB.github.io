import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

/// <reference types="vite/client" />

export type Project = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  tech?: string[]
  links?: { demo?: string; code?: string }
  summary?: string
  cover?: string
  html?: string
}

const md = new MarkdownIt({ html: true, linkify: true })

// 通过 Vite 的按需导入，把 md 文件打包进来
const modules = import.meta.glob('../content/projects/*.md', { as: 'raw', eager: true })

let cache: Project[] | null = null

export function useProjects() {
  if (cache) return { list: cache, findBySlug }
  const list: Project[] = []
  for (const path in modules) {
    const raw = modules[path] as string
    const { data, content } = matter(raw)
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    list.push({
      slug,
      title: data.title ?? slug,
      date: data.date,
      tags: data.tags ?? [],
      tech: data.tech ?? [],
      links: data.links ?? {},
      summary: data.summary ?? '',
      cover: data.cover ?? '',
      html: md.render(content),
    })
  }
  // 按日期倒序
  list.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  cache = list
  return { list, findBySlug }
}

function findBySlug(slug: string) {
  return (cache || []).find(p => p.slug === slug)
}