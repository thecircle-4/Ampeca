
<template>
<div id="app">
   <router-link to='/' >  
   
</router-link>
   <router-view></router-view>
</div>

</template>

<script>


export default {
  name: 'App',
  components:{ 
    
  }
  
}
</script>

<style scoped>
/* *{
  width: 100%;
  height: 100%;
  margin: 0;
} */
/* this style is for the position of the page */
/* #app{
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); 
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

}  */

 /* @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}  */
/* this style is for the gradient color for the background first page  */

</style>
