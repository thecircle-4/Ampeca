<template>
  <div id="app">
    <nav class="horizontal">
     <a class="logo" href="#">AMPECA</a>
     <input type="text" placeholder="Search for songs ,artists ,lyrics, playlist..." id="search" role="combobox">
    </nav>
   
<div class="container">
  <div v-for ="product in Data" :key="product.id"> 
      <p> https://archive.org/embed/ {{product.src}}</p>
      <p>{{product.Name}} </p> 
      <img :src='product.Cover' alt="">
          <audio controls id="audio" class="audio1"  >
              <source  :src='product.src' type="audio/ogg">
  <!-- Your browser does not support the audio tag. -->
          </audio>
  <div>{{product.src}}</div> </div> 
</div>
 
  </div>
</template>
<script>
import axios from "axios";


export default {
  name: "App",
  components: {},
  data() {
    return {
      message: "Hello World ",
      Data: {},
      song : '/media/PoloG.369417b3.mp3'
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/get").then((res) => {
      this.Data = res.data;
      console.log(res.data);
    });


  },
  methods: {
    x: function () {
      console.log("éd");
    }
  },
};
 setTimeout(() => {
   var audio = document.getElementById("audio");
   // here You Set The
console.log(document.getElementsByClassName('audio1'))
audio.currentTime = 40;
 console.log(document.getElementsByClassName("hello") ," Hello")

 }, 300);
</script>
<style scoped>
*{
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #727272;;
}
.horizontal{
  position: relative;
  background-color: #121212;
  height: 50px;
}
#search{
  position: relative;
  width: 300px;
  height: 30px;
  background-color: #e5e7ea;
  border-radius: 20px;
  left: 400px;
  top: 7px;
}
.logo{
  background-color:#121212;
  color:#2471A3 ;
  font-size: 20px;  
  position: relative;
  left: 20px;
  top: 8px;
  text-decoration: none;
  font-family:Arial, Helvetica, sans-serif
}
</style>
