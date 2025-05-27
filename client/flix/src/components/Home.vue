<!-- src/views/Home.vue -->
<template>
  <div class="bg-netflix-black text-white min-h-screen">
    <Header :is-home="true" />
    <HeroSection
      image="https://placehold.co/1920x1080/000000/FFFFFF?text=Filme+em+Destaque"
      title="Stranger Things"
      description="Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais e uma garotinha estranha."
    />
    
    <section class="py-10 px-4 md:px-16 -mt-16 relative z-30">
      <h3 class="text-xl md:text-2xl font-bold mb-4">Populares na Netflix</h3>
      <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
        <MovieCard
          v-for="n in 6"
          :key="n"
          :image="`https://placehold.co/180x270/000000/FFFFFF?text=Filme+${n}`"
          :title="`Filme ${n}`"
          :relevance="97"
          age-rating="16"
          extra-info="2023"
        />
      </div>
    </section>

    <section class="py-6 px-4 md:px-16">
      <h3 class="text-xl md:text-2xl font-bold mb-4">Séries em alta</h3>
      <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
        <MovieCard
          v-for="n in 6"
          :key="n"
          :image="`https://placehold.co/180x270/000000/FFFFFF?text=Série+${n}`"
          :title="`Série ${n}`"
          :relevance="99"
          age-rating="16"
          extra-info="3 temporadas"
        />
      </div>
    </section>

    <section class="py-6 px-4 md:px-16">
      <h3 class="text-xl md:text-2xl font-bold mb-4">Originais Netflix</h3>
      <div class="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4 justify-center">
        <MovieCard
          v-for="n in 6"
          :key="n"
          :image="`https://placehold.co/180x270/000000/FFFFFF?text=Original+${n}`"
          :title="`Original ${n}`"
          :relevance="97"
          age-rating="16"
          extra-info="2023"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/HeroSection.vue'
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    HeroSection,
    MovieCard
  }
}
</script>