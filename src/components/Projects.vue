<template>
  <div class="projects">
    <h2>Selected Projects</h2>
    <div class="grid">
      <div class="tile" v-for="n in 6" :key="n">
        <div class="art" :style="{ background: `linear-gradient(135deg, rgba(${n*20},${100+n*10},${200-n*10},0.9), rgba(255,255,255,0.05))` }"></div>
        <div class="meta">
          <h3>Project {{ n }}</h3>
          <p>Interactive art piece blending code and design.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'Projects',
  setup() {
    onMounted(() => {
      const tiles = document.querySelectorAll('.tile')
      tiles.forEach(t => {
        t.addEventListener('mousemove', (e) => {
          const rect = t.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width/2
          const y = e.clientY - rect.top - rect.height/2
          gsap.to(t, { rotationY: x/20, rotationX: -y/20, transformPerspective: 600, duration: 0.5 })
        })
        t.addEventListener('mouseleave', () => gsap.to(t, { rotationY: 0, rotationX: 0, duration: 0.6 }))
      })
    })
  }
}
</script>
