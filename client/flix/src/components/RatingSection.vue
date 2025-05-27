<!-- src/components/RatingSection.vue -->
<template>
  <section class="py-6 px-4 md:px-16 border-t border-netflix-gray/20">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-xl font-bold mb-4">Avalie este título</h3>
      <div class="flex space-x-4 items-center">
        <button class="p-3 rounded-full hover:bg-white/10 transition-colors" @click="$emit('rate', 'like')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        </button>
        <button class="p-3 rounded-full hover:bg-white/10 transition-colors" @click="$emit('rate', 'dislike')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RatingSection',
  emits: ['rate']
}
</script>