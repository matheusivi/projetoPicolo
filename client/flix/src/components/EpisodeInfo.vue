<!-- src/components/EpisodeInfo.vue -->
<template>
  <section class="py-8 px-4 md:px-16 bg-netflix-black">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-start gap-8">
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-2">{{ title }}</h1>
          <div class="flex items-center text-sm mb-4">
            <span class="text-green-500 font-bold">{{ relevance }}% relevante</span>
            <span class="mx-2 border border-white/40 px-1">{{ ageRating }}</span>
            <span class="mr-2">{{ year }}</span>
            <span>{{ seasons }}</span>
          </div>
          <h2 class="text-xl font-bold mb-2">{{ episodeTitle }}</h2>
          <p class="text-netflix-light/80 mb-6">{{ description }}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 class="text-netflix-gray text-sm">Elenco:</h4>
              <p class="text-netflix-light">{{ cast }}</p>
            </div>
            <div>
              <h4 class="text-netflix-gray text-sm">Gêneros:</h4>
              <p class="text-netflix-light">{{ genres }}</p>
            </div>
            <div>
              <h4 class="text-netflix-gray text-sm">Cenas e momentos:</h4>
              <p class="text-netflix-light">{{ moods }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EpisodeInfo',
  props: {
    title: {
      type: String,
      default: 'Stranger Things'
    },
    relevance: {
      type: Number,
      default: 97
    },
    ageRating: {
      type: String,
      default: '16'
    },
    year: {
      type: String,
      default: '2023'
    },
    seasons: {
      type: String,
      default: '4 Temporadas'
    },
    episodeTitle: {
      type: String,
      default: 'Capítulo Um: O Desaparecimento de Will Byers'
    },
    description: {
      type: String,
      required: true
    },
    cast: {
      type: String,
      default: 'Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown'
    },
    genres: {
      type: String,
      default: 'Sci-Fi, Terror, Drama'
    },
    moods: {
      type: String,
      default: 'Assustador, Suspense, Sombrio'
    }
  }
}
</script>