<template>
    <div data-aos="zoom-in" data-aos-duration="3000" class="home">
      <img src="https://i.postimg.cc/cszzVnG5/IMG-20221104-090808.jpg" style="width: 490px; height: 490px; padding:30px; border-radius: 50px;"/>
     <h1>Zoe Daniels</h1>
     <h4>Welcome to my Website</h4>
     </div>
  </template>
  
  <script>
  import AOS from "aos";
  export default {
    name: 'HomeView',
    mounted() {
        AOS.init();
    },
    components: {
    
    }
  }
  </script>
  <style>

 
  
  
  
  </style>
  