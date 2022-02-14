<template>
  <div id="app">
    <div class="container">
      <div class="logo-img">
        <img src="../assests/img.png.png" id="img" />
      </div>
      
        <input v-model="email" type="email" placeholder="Email" class="input" @change="someHandler" />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input"
          id="pass"
          @change="someHandler"
        />
    
      <router-link to="/signup">
        <a href="#" id="a">create new account ?</a>
      </router-link>
    </div>

    <router-link to="/home">
      <button @click="login()" class="log-but">Login</button>
    </router-link>
    
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      result: {},
      isAuth: false
    };
  },
  methods: {
    async login() {
      let data = {
        email: this.email,
        password: this.password
      };
      
      await axios
        .post("http://localhost:3000/api/login", data)
        .then(( {data} ) => {
          console.log(data.user["id"]);
          alert("login successful");
          this.$router.push({ name: "Home", query: { redirect: "/Home" } , params:{id:data.user["id"]}});
        })
        .catch(err => {
          this.$router.push({ name: "login", query: { redirect: "/login" } });
        alert("User Name Or Password Incorrect")
          console.log(err, "ghalet login");
        });
    }
  }
};
</script>

<style scoped>
  * {
  
    width: 100%;
    height: 100%;
    margin: 0;
    
  }
/* this style is for the position of the page */
#app {
  /* background-size: cover; */
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* this style is for the gradient color for the background first page  */
.container {
  position: absolute;
  width: 400px;
  height: 350px;
  border-radius: 15px;
  border: 3px solid rgb(245, 244, 244);
  bottom: 200px;
  left: 480px;
  background-color: rgb(245, 244, 244);
}
/* this is the containe the inputs of the login  */

/* to change the placeholder color */
.log-but {
  position: absolute;
  width: 300px;
  height: 50px;
  background-color: #97e2f0;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 25px;
  border-color: #97e2f0;
  top: 340px;
  left: 550px;
}
.log-but:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
/* this style for the button and i make it hover  */

.input {
  position: absolute;
  height: 40px;
  width: 300px;
  top: 90px;
  left: 50px;
  border-radius: 15px;
  border-color: white;
  outline: none;
  background-color: white;
}
::placeholder {
  color: black;
  font-size: 1em;
}
#pass {
  position: absolute;
  top: 150px;
}
#a {
  position: relative;
  bottom: 140px;
  left: 50px;
  color: black;
}
#img {
  position:relative;
  width: 150px;
  height: 80px;
  padding: 10px;
  top: -0px;
  left: 120px;
}
</style>
