<template>
  <div class="hello">
    <!-- <router-link  to="/plvue" @click="button" class ="firas">link</router-link > -->
    <div>
      <button @click="button">play list</button>
      <div v-if="show">
        <Playlistvue :data="Songs" :id="id" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import $ from "jquery"
// import router from "vue-router";
import Playlistvue from "./Playlistvue";
export default {
  name: "Playlist",
  components: { Playlistvue },
  data() {
    return {
      Data: [],
      Songs: [],
      show: false,
      id: 4,
    };
  },
  mounted() {
    axios.get(`http://localhost:3000/api/get/${4}`)
      .then((res) => {
        this.Data = JSON.parse(res.data[0].songs);
        console.log(JSON.parse(res.data[0].songs), "1");
      })
      .then(() => {
        for (let i = 0; i < this.Data.length; i++) {
          console.log(this.Data[i], "loop");
           axios.get(`http://localhost:3000/api/getsongs/${this.Data[i]}`)
           .then((res)=>{
             this.Songs.push(res.data)
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(this.Songs, "loggg");
  },
  methods: {
    button() {
      this.show = !this.show;
    },
  },
};
</script>
