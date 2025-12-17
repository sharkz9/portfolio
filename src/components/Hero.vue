<template>
  <div class="hero-inner">
    <h1 class="title">Volkan Kaya</h1>
    <p class="subtitle">.NET Developer</p>
    <div class="actions">
      <router-link class="btn" to="/projects">See Projects</router-link>
      <router-link class="btn ghost" to="/about">About Me</router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'Hero',
  setup() {
    const root = ref(null)
    onMounted(() => {
      gsap.from('.title', { y: -40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.subtitle', { y: -10, opacity: 0, duration: 1, delay: 0.2 })
      gsap.from('.btn', { scale: 0.9, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.4 })
    })
    return { root }
  }
}
</script>
