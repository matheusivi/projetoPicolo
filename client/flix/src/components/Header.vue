<!-- src/components/Header.vue -->
<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-500 bg-gradient-to-b from-black/80 to-transparent">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <template v-if="isHome">
          <h1 class="text-netflix-red text-3xl font-bold mr-10">NETFLIXCLONE</h1>
          <nav class="hidden md:block">
            <ul class="flex space-x-6">
              <li><router-link to="/" class="text-white font-medium">Início</router-link></li>
              <li><router-link to="#" class="text-netflix-light/80 hover:text-white">Séries</router-link></li>
              <li><router-link to="#" class="text-netflix-light/80 hover:text-white">Filmes</router-link></li>
              <li><router-link to="#" class="text-netflix-light/80 hover:text-white">Bombando</router-link></li>
              <li><router-link to="#" class="text-netflix-light/80 hover:text-white">Minha lista</router-link></li>
            </ul>
          </nav>
        </template>
        <template v-else>
          <button class="flex items-center" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Voltar</span>
          </button>
        </template>
      </div>
      <div class="flex items-center space-x-4">
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <div class="relative">
          <img src="https://placehold.co/32" alt="Perfil" class="rounded">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isHome: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      console.log('Botão Voltar clicado!')
      this.$router.replace('/') // Usar replace em vez de push
    }
  }
}
</script>