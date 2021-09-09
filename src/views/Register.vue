<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="Register">Register</button>
      <p>Have an account?<router-link to="/login">Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const Register = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          alert(userCredential.user);
          // ...
        })

        .catch((error) => {
          alert(error.message);
        });
    };

    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style scoped></style>
