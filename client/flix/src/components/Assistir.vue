
<template>
  <div class="bg-netflix-black text-white min-h-screen">
    <Header :is-home="false" />
    <VideoPlayer
      image="https://placehold.co/1920x1080/000000/FFFFFF?text=Stranger+Things"
      title="Stranger Things"
      @toggle-play="handleTogglePlay"
    />
    
    <section class="py-8 px-4 md:px-16 bg-netflix-black">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-start gap-8">
          <EpisodeInfo
            description="Em 6 de novembro de 1983, em Hawkins, Indiana, o cientista Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will enquanto o chefe de polícia Jim Hopper inicia uma investigação. No dia seguinte, uma menina psicocinética que sabe sobre o desaparecimento de Will é encontrada por Mike, Lucas e Dustin."
          />
          <EpisodeList :episodes="episodes" />
        </div>
      </div>
    </section>

    <section class="py-6 px-4 md:px-16">
      <h3 class="text-xl md:text-2xl font-bold mb-4">Mais como este</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <MovieCard
          v-for="n in 6"
          :key="n"
          :image="`https://placehold.co/180x270/000000/FFFFFF?text=Sugestão+${n}`"
          :title="`Título Sugerido ${n}`"
          :relevance="97 - n + 1"
        />
      </div>
    </section>

    <RatingSection @rate="handleRating" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import EpisodeInfo from '../components/EpisodeInfo.vue'
import EpisodeList from '../components/EpisodeList.vue'
import MovieCard from '../components/MovieCard.vue'
import RatingSection from '../components/RatingSection.vue'

export default {
  name: 'Assistir',
  components: {
    Header,
    Footer,
    VideoPlayer,
    EpisodeInfo,
    EpisodeList,
    MovieCard,
    RatingSection
  },
  data() {
    return {
      episodes: [
        { title: '1. O Desaparecimento de Will Byers', duration: '50 min' },
        { title: '2. A Estranha na Rua Maple', duration: '48 min' },
        { title: '3. Luzes de Natal', duration: '51 min' },
        { title: '4. O Corpo', duration: '47 min' }
      ]
    }
  },
  methods: {
    handleTogglePlay(isPlaying) {
      console.log('Playing:', isPlaying)
    },
    handleRating(rating) {
      console.log('Rating:', rating)
    }
  }
}
</script>