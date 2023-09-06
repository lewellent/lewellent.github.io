<template>
  <div>
    <p class="text-black text-2xl py-1 font-semibold">
      Todd Lewellen
    </p>
    <p class="py-2">
      Hi! I am [TODO], a [TODO], [TODO] and [TODO]. Currently
      working at [TODO].
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://github.com/lewellent"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/toddlewellen/"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
