<!-- src/components/HeroSection.vue -->
<template>
  <section class="relative h-screen">
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent z-10 mt-[70vh]"></div>
    <img :src="image" :alt="title" class="w-full h-full object-cover">
    
    <div class="absolute bottom-[20%] left-0 z-20 px-4 md:px-16 max-w-2xl">
      <h2 class="text-5xl font-bold mb-4">{{ title }}</h2>
      <p class="text-lg mb-6">{{ description }}</p>
      <div class="flex space-x-4">
        <router-link to="/assistir" class="bg-white text-black py-2 px-6 rounded flex items-center font-bold hover:bg-white/80 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          Assistir
        </router-link>
        <button class="bg-gray-500/70 text-white py-2 px-6 rounded flex items-center font-bold hover:bg-gray-600/70 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Mais informações
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>