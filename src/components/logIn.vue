<template>
      
  <div id="app">
  <div v-if="show" class="container">
          <div class="logo-img"> 
     <!-- <img src=".//img.png.png" id="img" > -->
    </div>
        <form  >
      <input type="email" placeholder="Email" class="input">
      <input type="password" placeholder="Password" class="input" id="pass">
       </form>
       <a href="#" id="a">create new  account ?</a>
      </div>
     
       <button @click="show = !show" class="log-but">Login</button>
       <Transition>
     
       </Transition>
  </div>
</template>

<script>
  

export default {
  name: 'App',
 data(){
   return {
     show:true
     }
 }
}
</script>

<style>

</style>
