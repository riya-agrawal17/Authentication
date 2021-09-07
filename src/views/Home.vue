<template>
  <div class="home">
    <h1>Welcome, {{ email }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
export default {
  setup() {
    const email = ref('');
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      email.value = user.email;
    }

    const Logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => console.log('Signed out'))
        .catch((error) => alert(error.message));
    };
    return {
      email,
      Logout,
    };
  },
};
</script>
