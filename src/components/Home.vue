<template>
  <div class="home" >
    <div id="nav">
      <nav>
        <a href="/home" id="logo">AMPECA</a>
        <input type="text" placeholder="Search for songs,playlist,artists,lyrics ..." id="search">
        <a @click="ToProfile" id="profile">Profile</a>
      </nav>
    </div>
    <div class="side">
      <nav>
        <a href="#" id="play">My librery</a>
      </nav>
    </div>
    <div id="waveform">
      <p id="explore">Explore</p>
      <div v-for ="product in Data" :key="product.id"> 
         <!-- <p> https://archive.org/embed/ {{product.src}}</p> -->
        <p>{{product.Name}} </p> 
        <button @click="AddToPlaylist(product.id)" class="md-icon-button md-accent"><font-awesome-icon icon="fa-solid fa-heart" />add</button>
        <img id="image" :src='product.Cover' alt="">
        <div class="overlay">
            <a href="#" class="icon" title="User Profile">
            <i class="fa fa-play"></i>
            </a>
            </div>
        <audio controls id="audio" class="audio1"  >
        <source  :src='product.src' type="audio/ogg">
             Your browser does not support the audio tag.
        </audio>
        <!-- <div>{{product.src}}</div> -->
      </div> 
     </div>

   
  </div>
</template>
<script>
import axios from "axios";

export default {
  names: 'IconButtons',
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
    },
    AddToPlaylist: function(event){
var x = window.location.href.substr(27,1) 
x= parseInt(x)
var data = {
user:x ,  
songs:event
} 
axios.post("http://localhost:3000/api/post",data).then(res=> {
console.log("Check The DataBase ")
console.log(res)
})
} , 
ToProfile : function(){ 
var x = window.location.href.substr(27,1) 
x= parseInt(x)
          this.$router.push({ name: "profile", query: { redirect: "/profile" } , params:{id:x}});
}
    
  },
};
 setTimeout(() => {
   var audio = document.getElementById("audio");
   // here You Set The
console.log(document.getElementsByClassName('audio1'))
audio.currentTime = 40;
 console.log(document.getElementsByClassName("hello") ," Hello") }, 300);
</script>



<style scoped>


.home{
position:relative;
background-color: #1b1c1d;
right: 7px;
top: -8px;
}
#nav{
position: relative ;
height: 70px;
width:1480px ;
background-color: #2b2d2f;
}
.side{
position: relative ;
width: 180px;
height: 2100px;
background-color: #2b2d2f;
}

#search{
  position: relative;
  width: 300px;
  height: 40px;
  left: 300px;
  top: 10px;
  font-size: 15px;
  border-radius: 30px;
  background-color: #e5e7ea;
}
  
#logo{
  position: relative;
  
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: white;
  top: 20px;
  
}

#image{
  
width: 250px;
height: 300px;
border-radius: 10px;

}
#waveform{
     position: absolute;
     display:grid;
     grid-template-columns: repeat(3, 0.2fr);
     grid-gap: 10px;
     grid-auto-rows: minmax(50px, auto);  
     left: 300px;
     top: 100px;
}
#profile{
  position: absolute;
  left: 1350px;
  top: 20px;
  font-size: 20px;
  color: #dfdfdf;
}
#play{
 position: relative;
  
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #dfdfdf;
  top: 120px;
  left: 30px;
}
#explore{
  position: relative;
  color: #dfdfdf;
  font-size: 50px;
  left:-85px;

}
#audio{
  position: relative;
  width: 50px;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: red;
}
.container:hover .overlay {
  opacity: 1;
}
.icon {
  color: white;
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.fa-user:hover {
  color: #eee;
}
</style>
