<template>
  <div>
    <div style="text-align: left;">
    <label for="username">GitHub Username</label><br>
    <input
      v-model="username"
      type="text"
      id="username"
      placeholder="GitHub Username"
      @keyup.enter="goToUserView()"
    />
      <button @click="goToUserView()">
        Search
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
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
