<template>
  <div class="about">
    <h1>{{ `${username}'s Projects` }}</h1>
  </div>
</template>


<script>
import { UserService } from '../services/UserService';

export default {
  name: 'user',

  data() {
    return {
      projects: [],
    };
  },

  computed: {
    username() {
      return this.$route.params.id;
    },
  },

  mounted() {
    UserService.getProjectsFromUser(this.username);
    // console.log(this.$route.params);
  },

};
</script>
