<template>
  <div>
    <div class="sidebar" id="sidebars">
      <ul class="links">
        <li class="link active">
          <a href="#">
            <ion-icon name="home-outline" class="icono-gear"></ion-icon>Settings
          </a>
        </li>
      </ul>
    </div>
    <div class="inputDiv">
      <input v-model="username" placeholder="edit me" @change="someHandler" />
      <p>username is: {{ username }}</p>
      <input v-model="email" placeholder="edit me" @change="someHandler" />
      <p>email is: {{ email }}</p>
      <input v-model="password" placeholder="edit me" @change="someHandler" />
      <p>password is: {{ password }}</p>
      <button type="button" @click="updateUser()">Update</button>
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
      user: {}
    };
  },
  methods: {
   async updateUser(id) {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password
      };

    await  axios
        .put(`http://localhost:3000/api/updateuser/${id}`, data)
        .then(response => {
          console.log(response);
        });
    },
    mounted() {
      this.getUserInfo()
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

<style>
@import url("https://icono-49d6.kxcdn.com/icono.min.css");
:root {
  --bg-color: #000811;
  --primary-color: #006ce0;
  --border-radius: 6px;
  --color: #2b82df;
  /* --box-shadow: #0b488a 5px 0px 50px 0px; */
}
.inputDiv {
  position: relative;
  margin: auto;
  width: 50%;
  border: 3px solid #006ce0;
  padding: 10px;
}
.sidebar {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  background: var(--bg-color);
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
  background: var(--primary-color);
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
</style>
