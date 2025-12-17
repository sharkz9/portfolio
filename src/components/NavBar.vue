<template>
  <nav class="nav">
    <div class="brand">Volkan Kaya - Portfolio</div>
    <ul class="links">
      <li><router-link to="/" active-class="active">Home</router-link></li>
      <li><router-link to="/projects" active-class="active">Projects</router-link></li>
      <li><router-link to="/about" active-class="active">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default { name: 'NavBar' }
</script>
