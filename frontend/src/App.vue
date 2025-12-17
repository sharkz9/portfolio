<template>
  <div id="app-root">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterBar />
    <canvas id="bg-canvas"></canvas>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  components: { NavBar, FooterBar }
}
</script>
