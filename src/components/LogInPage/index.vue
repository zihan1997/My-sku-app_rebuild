<template>
  <div>
    <div class="log-logo">My-Sku</div>

    <div class="login-block">
      <h1>Login</h1>
      <input type="text"
             v-model="username"
            placeholder="Username"
            id="username"/>
      <input type="password"
             v-model="password"
            placeholder="Password"
            id="password"

      />
      <button @click="handleSubmit">Submit</button>

      <div id="linkReg">
        <router-link to="/register">
          Not a member?</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: "LoginPage",
  setup(){
    const router = useRouter();
    // const route = useRoute();

    const redirect = () => {
      router.replace({
        path: '/'
      })
    };
    const store = useStore();
    const loginAction = (user)=>{
      return store.dispatch('user/Login', user)
    }
    return {
      redirect,
      loginAction
    }
  },
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit(){
      const user = {username: this.username, password: this.password}
      console.log("submit" + user);
      this.loginAction(user)
          .then(() => this.redirect())
          .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
div {
  background: whitesmoke no-repeat center center;
  background-size: cover;
  height: fit-content;
}

.log-logo {
  width: 53px;
  margin: 30px auto;
  color: #0074D9;
  background-color: whitesmoke;
}

.login-block {
  width: 320px;
  padding: 20px;
  background: white;
  border-radius: 5px;
  border: 10px;
  border-top: 5px solid dodgerblue;
  margin: 0 auto;
}

.login-block h1 {
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}

.login-block input {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 14px;
  padding: 0 20px 0 50px;
  outline: none;
}

.login-block input#username {
  background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#username:focus {
  background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input#password {
  background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#password:focus {
  background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input:active, .login-block input:focus {
  border: 1px solid #ff656c;
}

.login-block button {
  width: 100%;
  height: 40px;
  background: dodgerblue;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid dodgerblue;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}

.login-block button:hover {
  background: cornflowerblue;
}
#linkToReg{
  background-color: #000066;
}

</style>
