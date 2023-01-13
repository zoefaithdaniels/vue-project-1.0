<template>
 
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">About</router-link>|
      <router-link to="/Resume" class="nav-link">Resume</router-link> |
    <router-link to="/Projects" class="nav-link">Projects</router-link>|
    <router-link to="/Testimonials" class="nav-link">Testimonials</router-link> |
    <router-link to="/Contact" class="nav-link">Contact</router-link>|

    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
  padding-top: 40px;
  margin-top: 0px;
  background-color: violet;
  word-spacing: 2px;
  border: solid black;
  
  

}
</style>