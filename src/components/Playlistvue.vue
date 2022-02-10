<template>
<div >
    <div>
      play list vue
      <div id="firas" v-for="song in data" :key="song.id" >
          <div   v-for="dt in song" :key="dt.id" >
            <h1> {{dt['Name']}} </h1>
            <h1> {{dt['ArtisteName']}}</h1>
            <img src="{{dt['Cover']}}"/>
            <button @click="remove(dt['id'])">delete</button>
            <audio controls>
              <source src="{{dt['src']}}" type="audio/ogg">
            </audio>
          </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
  export default {
     props: ["data","id"],
    name: "Playlistvue",
  components: {},
  data() {
    return {
      Data:[1,2,3,4,5,6,7,8],
    };
  },
  methods: {
       remove(dt) {
        console.log(this.id,"",dt)
        axios.put(`http://localhost:3000/api/delete/${this.id}`,{idsong:dt})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }
  }
  }
</script>