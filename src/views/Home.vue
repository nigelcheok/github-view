<template>
  <div>
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div style="text-align: left;">
    <label for="username">GitHub Username</label><br>
    <input
      v-model="username"
      type="text"
      id="username"
      placeholder="GitHub Username"/>
      <button @click="goToUserView()">
        Search
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },

  data() {
    return {
      username: undefined,
    };
  },

  methods: {
    goToUserView() {
      if (this.username !== undefined) {
        this.$router.push({ path: `${this.username}` });
      }
    },
  },
};
</script>
