<template>
  <div id="app">
<ul>
  <li><a><input type="text"></a></li>
  <li><a>Profile</a></li>
</ul>
<ul>
  <li><a>Logo</a></li>
   <li><a><button>Explorer</button></a></li>
   <li><a><button>My Library</button></a></li>
</ul>
<audio controls id="audio" class="audio1">
  <source src="../PoloG.mp3" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>
 {{mounted()}}
  </div>  

</template> 
<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {},
  data(){ 
    return {
message : "Hello World " , 
Data:{}
}
}, 
methods:{ 
x : function(){
console.log("éd")
}, 
async  mounted() {
  console.log("Helezlo")
await axios.get("http://localhost:3000/get").then(data=>this.Data=data.data)
console.log(this.Data)
console.log("fef")


} 

}
}

setTimeout(() => {
var audio= document.getElementById("audio");
document.getElementById("audio").setAttribute('src' ,"../Lil.mp3")
console.log(document.getElementsByClassName("audio1"))
      // here You Set The 
      //audio.currentTime=40;

}, 300);
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: right;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>