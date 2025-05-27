<!-- src/components/MovieCard.vue -->
<template>
  <router-link :to="to">
    <div class="movie-card transition-transform duration-300 relative">
      <img :src="image" :alt="title" class="rounded-md w-full">
      <div class="movie-info absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300">
        <h4 class="font-bold">{{ title }}</h4>
        <div class="flex items-center text-xs mt-1">
          <span class="text-green-500 font-bold">{{ relevance }}% relevante</span>
          <span v-if="ageRating" class="mx-2 border border-white/40 px-1">{{ ageRating }}</span>
          <span>{{ extraInfo }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    to: {
      type: String,
      default: '/assistir'
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    relevance: {
      type: Number,
      default: 97
    },
    ageRating: {
      type: String,
      default: ''
    },
    extraInfo: {
      type: String,
      default: ''
    }
  }
}
</script>