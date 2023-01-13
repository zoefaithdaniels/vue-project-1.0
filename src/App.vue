<template>
  <div class="background">
    <NavBar/>
   <router-view/>
   <Footer/>
  </div>
   
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
   

   export default{
    Name:"App",
    components:{
      NavBar,
      Footer
    }
   }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: rgb(45, 10, 151);
}

.background{
  background-color: pink;
  min-height: 100vh;
}
 
</style>
