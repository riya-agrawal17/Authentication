<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="Login">Login</button>
      <p>
        Need an account?<router-link to="/register">Register Here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const Login = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
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
