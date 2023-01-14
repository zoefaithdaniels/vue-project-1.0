<template>
  <div class="heading">
    <h1>Resume Page</h1>
  </div>
  <h2>Education</h2>
    <p>My education are here to help and guide you. I am here to provide my education to help other developers to
      understand my work and to see what I'm cable of doing in my work areas.</p>
  <div class="container">
    <div class="row" >
      <div class="col-12" v-for="item in resume">
        <div class="card mx-auto my-4" style="width: 50%;">
          <img :src="item.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">{{ item.name }}</h3>
            <h2 class="card-text">{{ item.title }}</h2>
            <h6 class="card-text">{{ item.year }}</h6>
            <h5 class="card-text">{{ item.description }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="education" class="education m-auto">




  </section>
</template>
<script>
export default {
  resume: "card",
  data() {
    return {
      resume: [
        {
          id: 'first',
          name: 'Academics',
          img: 'https://i.postimg.cc/d1PTFf3t/elsie-high.png',
          title: 'Elsie River High School',
          year: '2017-2021',
          description: 'Highest grade passed is Grade 12',
        },
        {
          name: 'Academics',
          img: 'https://i.postimg.cc/RZwB8pkT/life-choices.png',
          title: 'Life Choices',
          year: '2022-2023',
          description: 'I am currently at Life Choices training coding, my goal is to improve my skills and become a full stack front-developer. ',
        },
        {
          name: 'Volunteer',
          img: 'https://i.postimg.cc/sX6hG44t/IMG-20230114-WA0000.jpg',
          title: 'Bergville Primary School',
          year: 'January 2022 - June 2022',
          description: 'Ive volunteered at Bergville Primary School as a Helping hand for the educators. It has taught me to be vigilant and have patience. It has also taught me communication skills, and how to work with people on a daily basis and how to deescalating conflict.',
        },
        {
          name: 'Volunteer',
          img: 'https://i.postimg.cc/ZR8J1bCj/blac.png',
          title: 'Blac',
          year: '2021-2022',
          description: 'I Have also Volunteered at BLAC, which has taught me to take initiative in situations that required me to do so.',
        },
      ]
    }
  }
}
</script>
<style>
.heading {
  font-size: 30px;
  color: black;
  text-align: center;
}

#education {
  width: 60%;
  margin: auto;
}

.brad {
  border: 4px solid black;
  background-color: violet;
  width: 100%;

}


.card {
  color: black;
  background-color: violet;
  margin-top: 20px;


}
</style>