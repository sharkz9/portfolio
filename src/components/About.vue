<template>
  <div class="about">
    <h2>About Me</h2>
    <div class="cards">
      <div class="card">I craft pixel-perfect interfaces with motion.</div>
      <div class="card">I explore generative art using canvas and shaders.</div>
      <div class="card">I build interactive experiences for the web.</div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'About',
  setup() {
    onMounted(() => {
      gsap.from('.card', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' })
    })
  }
}
</script>
