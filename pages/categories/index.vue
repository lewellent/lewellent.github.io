<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const topics = [
  'engineering-management',
  'python',
  'django',
  'javascript',
  'typescript',
  'git',
  'docker',
  'kubernetes',
  'vue',
  'nuxt',
  // 'pinia',
  'vuex',
  // 'firebase',
  // 'supabse',
  // 'cypress',
  // 'vercel',
  // 'namecheap',
]

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content:
        'All the topics on which either I have written a blog or will write a blog in near future.',
    },
  ],
  titleTemplate: 'TODO\'s Blog - %s',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in topics" :key="topic">
        <CategoryCard :title="makeFirstCharUpper(topic)" />
      </template>
    </div>
  </main>
</template>
