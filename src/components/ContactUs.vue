<template>

<div class="bigdiv">
    <div class="container">
<br><br><br>
        <form @submit.prevent="sendEmail">
          <label class="title">Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label class="title">Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label class="title">Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
       emailjs.sendForm('service_sk6hp6d', 'template_vdv9t06', e.target, 'user_KXq2TtnmGdyIEXStwryjn', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })
        console.log('it works!!!')

      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>

* {box-sizing: border-box;}

.title {
  color: white;
}
.put{
  width:200px;
}

label {
  float: center;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

}

input[type=submit]:hover {
  background-color: #b8c7b9;
}

.container {
  /* display: block; */
  /* margin:auto; */
  background-color: rgba(0, 0, 0, 0.856);
  text-align: center;
  border-radius: 30px;
  /* background-color: #f2f2f2; */
  padding: 20px;
  width: 70%;
   /* position: absolute; */
   position: relative;
  left: 210px;
  top: 100px;
   box-shadow: 0 9px 10px 0 rgba(0, 128, 0, 0.575);
   
}
</style>