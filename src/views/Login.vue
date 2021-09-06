<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" />
      <p>
        Need an account?<router-link to="/register">Register Here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    const email = ref('email');
    const password = ref('password');
    const Login = () => {
      const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user);
    // ...
  })
        .catch((error) => alert(error.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style scoped></style>
