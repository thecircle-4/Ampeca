
<template>
  <div id="app">
  <component v-bind:is="components"></component>
  <Profile />
  </div>
</template>

<script>
import logIn from './components/logIn.vue'
import signUp from './components/signUp.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components:{
    'log-in':logIn,
    'sign-up':signUp,
    Profile
  },
 data(){
   return {
     
     }
 }
}
</script>

<style>
/* *{
  width: 100%;
  height: 100%;
  margin: 0;
} */
/* this style is for the position of the page */

/* this style is for the gradient color for the background first page  */

</style>
