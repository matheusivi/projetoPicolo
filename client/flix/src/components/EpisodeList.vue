<!-- src/components/EpisodeList.vue -->
<template>
  <div class="md:w-1/3">
    <h3 class="text-lg font-bold mb-3">Mais episódios</h3>
    <div class="space-y-4">
      <router-link v-for="(episode, index) in episodes" :key="index" to="/assistir" class="flex gap-3 p-2 bg-white/10 rounded-md">
        <div class="w-24 h-16 flex-shrink-0 relative">
          <img :src="`https://placehold.co/160x90/000000/FFFFFF?text=Ep+${index + 1}`" :alt="`Episódio ${index + 1}`" class="w-full h-full object-cover rounded">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <p class="font-medium">{{ episode.title }}</p>
          <p class="text-sm text-netflix-gray">{{ episode.duration }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpisodeList',
  props: {
    episodes: {
      type: Array,
      required: true
    }
  }
}
</script>