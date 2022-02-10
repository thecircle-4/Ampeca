<template>
  <div>
    <div class="sidebar" id="sidebars">
      <ul class="links">
        <li v-on:click="isHidden = !isHidden" class="link active">
          <a href="#">
            <ion-icon name="home-outline" class="icono-gear"></ion-icon>Settings
          </a>
        </li>
        <li v-on:click="isHidden = true" class="link active">
          <a href="#">
            <ion-icon name="home-outline" class="icono-gear"></ion-icon>Profile
          </a>
        </li>
      </ul>
    </div>
    <div v-if="!isHidden">
      <!-- <h1  class="welcomepro">welcome home user</h1> -->
    </div>
    <div v-if="!isHidden" class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's Edit your acount!</div>
      <div class="input-container ic1">
        <input v-model="username" class="input" @change="someHandler" />
        <!-- <p>username is: {{ username }}</p> -->
        <div class="cut"></div>
        <label for="username" class="placeholder">User name</label>
      </div>
      <div class="input-container ic2">
        <input v-model="email" class="input" @change="someHandler" />
        <!-- <p>email is: {{ email }}</p> -->
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input v-model="password" class="input" type="password" @change="someHandler" />
        <!-- <p>password is: {{ password }}</p> -->
        <div class="cut cut-short"></div>
        <label for="password" class="placeholder">password</label>
      </div>
      <button @click="updateUser()" type="text" class="submit">submit</button>
    </div>
  </div>
  
</template>

  

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      user: {},
      isHidden: true
    };
  },
  methods: {
    async updateUser() {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password
      };
var x = window.location.href.substr(30,1)
x= parseInt(x)
alert(x)
      await axios
        .put(`http://localhost:3000/api/updateuser/${x}`, data)
        .then(response => {
          console.log(x)
          console.log(response);
        });
    },
    mounted() {
      this.getUserInfo();
    },

    async getUserInfo(id) {
      await axios
        .get(`http://localhost:3000/api/getUserInfo/${id}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style scoped>

.welcomepro {
  position: relative;
  display: block;
  margin-left: 600px;
  margin-right: auto;
  align-items: center;
}
@import url("https://icono-49d6.kxcdn.com/icono.min.css");
/* :root {
  --bg-color: #000811;
  --primary-color: #006ce0;
  --border-radius: 6px;
  --color: #2b82df; */
  /* --box-shadow: #0b488a 5px 0px 50px 0px; */
/* } */
/* /////////   side bar div /////// */
.inputDiv {
  /* position: relative; */
  margin: auto;
  width: 50%;
  border: 3px solid #006ce0;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.sidebar {
  background-color:  #000811;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  /* background: var(--bg-color); */
  transition: left 0.5s ease;
  -webkit-transition: left 0.5s ease;
  -moz-transition: left 0.5s ease;
  -ms-transition: left 0.5s ease;
  -o-transition: left 0.5s ease;
}
.sidebar ul {
  list-style: none;
  margin-top: 5rem;
  height: 100%;
}

.sidebar ul li {
  margin-top: 1rem;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.sidebar ul li.active {
  /* background: var(--primary-color); */
  background-color: #2b82df;
  transition: background 0.5s linear;
  box-shadow: rgba(20, 114, 238, 0.918) 0px 2px 10px 0px;
  width: 200px;
  border-radius: 50px;
}

.sidebar li .icono-gear {
  margin-right: 1rem;
  padding: 0.5rem;
  display: inline-block;
  position: relative;
  margin: 5;
  width: 20px;
  height: 20px;
  background: rgb(78, 75, 75);
  border-radius: 50%;
  border: 3.5 solid gray;
  box-sizing: border-box;
  font-family: "times new roman";
  font-weight: bold;
}
.sidebar li a {
  text-decoration: none;
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
}
.sidebar li a:hover {
  margin-left: 2px;
}
/* ///////////  user inputs div      ///////// */
/* body {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
} */
.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 700px;
  padding: 20px;
  width: 820px;
  /* display: block; */
 position: absolute;
 left: 540px;
 top: 40px;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 75px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}
</style>
