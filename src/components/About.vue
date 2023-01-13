<template>
    <div class="about">
    </div>
    <!-- <div id="about"> -->
         <div class="row">
          <div class="about-col-1" style="margin-top:20px;">
          <img src="https://i.postimg.cc/Nfqny9Zy/IMG-20221103-161223.jpg"> 
          </div>
          <div class="about-col-2">
            <h1 class="sub title">About Me</h1>
            <p>
              I am 19 years old, I live in Bishop Lavis and I am a very ambitious young lady.
                I love trying new things and discover new hidden talents that might have to learn more and too broaden my knowledge. I am a hard working person and always find ways to better myself and always up for new challenges.
                In my free time I spend time with family and reading aswell as watching sports on a regular.
            </p> 
        </div>
    </div> 
</template> 
<script>
    export default {
        
    }
</script>

<style scoped>
.about{
    padding: 80px 0;
    color: black;
    overflow: hidden;
 
   }
    .row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
   } 

    .about-col-1{
    flex-basis: 35%;
    margin-bottom: 30px;
    padding: 10px;


   }
   .about-col-1 img{
     width: 100%;
     border-radius: 10px;  
     background-color: violet; 
     border:solid;
     margin: 40px;
     padding-left: 20px;
     padding-right: 20px;
     padding-top: 20px;
     padding-bottom: 20px;
     margin-top: -95px;
      
   } 
    .about-col-2{
   flex-basis: 60%;
  } 
.sub-title{ 
     font-size: 60px;
    font-weight: 600;
    color: black;
} 
   .tab-titles{
    display: flex;
    margin: 20px 0 40px;

  }  
 .tab-links{
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
} 
.tab-links::after{
    content: '';
    width: 0;
    height: 3px;
    background: violet;
    position: absolute; 
    left: 0;
    bottom: -8px;
    transition: 0.5s;
}
  .tab-links.active-link::after{
    width: 50%;

  }
  .tab-content ul li{
    list-style: none;
    margin: 10px 0;

  }
  .tab-contents ul li span{
    color: violet;
    font-size: 14px;
  }
.tab-content{
    display: none;
}
.tab-contents.active-tab{
display: block;
}

</style>


