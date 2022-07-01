<template>
  <div>
    <div class="log-logo">My-Sku</div>

    <div class="login-block">
      <h1>Login</h1>
      <input type="text"
             value=""
             onChange="e => setName(e.target.value)"
            placeholder="Username"
            id="username"/>
      <input type="password"
             value=""
             onChange="e => setPwd(e.target.value)"
            placeholder="Password"
            id="password"

      />
      <button onClick={handleSubmit}>Submit</button>

      <div id="linkReg">
        <router-link to="/register">
          Not a member?</router-link>
<!--        <Link to="../register">Sign up now</Link>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  setup(){

  }
}
</script>

<style scoped>

</style>
