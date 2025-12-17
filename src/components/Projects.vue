<template>
  <div class="projects">
    <h2>Projects</h2>
    <div class="grid">
      <div class="tile project-one">
        <div class="number">01</div>
        <div class="art" :style="{ background: 'linear-gradient(135deg, rgba(255,100,100,0.9), rgba(255,255,255,0.05))' }"></div>
        <div class="meta">
          <h3>Project Portfolio Website</h3>
          <p>Personal portfolio built with Vue.js and GSAP animations.</p>
        </div>
      </div>  
      <div class="tile project-two">
        <div class="number">02</div>
        <div class="art" :style="{ background: 'linear-gradient(135deg, rgba(100,150,200,0.9), rgba(255,255,255,0.05))' }"></div>
        <div class="meta">
          <h3>Project Emoji Movie Guesser</h3>
          <p>Interactive art piece blending code and design.</p>
        </div>
      </div>
      <div class="tile project-three">
        <div class="number">03</div>
        <div class="art" :style="{ background: 'linear-gradient(135deg, rgba(150,200,100,0.9), rgba(255,255,255,0.05))' }"></div>
        <div class="meta">
          <h3>Project Three Title</h3>
          <p>Description for the third project.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.tile {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.tile:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255,255,255,0.8);
  z-index: 1;
}

.art {
  height: 200px;
  position: relative;
  background-size: cover;
  background-position: center;
}

.meta {
  padding: 1.5rem;
  text-align: left;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

p {
  color: #666;
  line-height: 1.5;
}
</style>

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
        t.addEventListener('mouseleave', () => gsap.to(t, { rotationY: 0, rotationX: 0, duration: 0.7 }))
      })
    })
  }
}
</script>