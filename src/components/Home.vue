<template>
  <div id="home">
    <div id="nav">
      <nav>
        <a href="/home" id="logo">AMPECA</a>
        <input type="text" v-model="search" placeholder="search" id="search">
        <a @click="ToProfile" id="profile">Profile</a>
      </nav>
    </div>
    <!-- <div class="side">
      <nav>
        <a href="#" id="play">My librery</a>
      </nav>
    </div> -->
    <div id="waveform">
      <p id="explore">Explore</p>
      <div v-for ="product in filtredData" :key="product.id">
         <!-- <p> https://archive.org/embed/ {{product.src}}</p> -->
        <p>{{product.Name}} </p>
        <button @click="AddToPlaylist(product.id)" class="icon"><font-awesome-icon icon="fa-solid fa-heart" />add</button>
        <img id="image" :src='product.Cover' alt="">
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
  name: "App",
  components: {},
  data() {
    return {
      search: "",
      message: "Hello World ",
      Data: [],
      song: "/media/PoloG.369417b3.mp3"
    };
  },
    computed:{
      filtredData:function(){
        return this.Data.filter((item)=>{
          return item.Name.toLowerCase().match(this.search.toLowerCase());
        })
      }
  },
  mounted() {
    axios.get("http://localhost:3000/api/get").then(res => {
      this.Data = res.data;
      console.log(res.data);
    });
  },
  methods: {
    x: function() {
      console.log("éd");
    },
    AddToPlaylist: function(event) {
      var x = window.location.href.substr(27, 1);
      x = parseInt(x);
      var data = {
        user: x,
        songs: event
      };
      axios.post("http://localhost:3000/api/post", data).then(res => {
        console.log("Check The DataBase ");
        console.log(res);
      });
    },
    ToProfile: function() {
      var x = window.location.href.substr(27, 1);
      x = parseInt(x);

      this.$router.push({
        name: "profile",
        query: { redirect: "/profile" },
        params: { id: x }
      });
    }
  }
  
};
setTimeout(() => {
  var audio = document.getElementById("audio");
  // here You Set The
  console.log(document.getElementsByClassName("audio1"));
  audio.currentTime = 40;
  console.log(document.getElementsByClassName("hello"), " Hello");
}, 300);


</script>
<style  scoped >
#home{
background-color: #1B1C1D;
position: absolute;
}
#nav{
position: relative ;
height: 70px;
width:1520px ;
background-color: #2B2D2F;
}
.side{
position: relative ;
width: 180px;
height: 2100px;
background-color: #2B2D2F;
}
#search{
  position: relative;
  width: 300px;
  height: 40px;
  left: 300px;
  top: 10px;
  font-size: 15px;
  border-radius: 30px;
  background-color: #E5E7EA;
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
     grid-auto-rows: minmax(350px, 150px);
     left: 300px;
     top: 50px;
}
#profile{
  position: absolute;
  left: 1350px;
  top: 20px;
  font-size: 20px;
  color: #DFDFDF;
}
#play{
 position: absolute;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #DFDFDF;
  top: 120px;
  left: 30px;
}
#explore{
  position: relative;
  color: #DFDFDF;
  font-size: 50px;
  left:-85px;
}
.icon {
  position: relative;
  width: 50px;
  height: 50px;
}
.fa-user:hover {
  color: #eee;
}
</style>