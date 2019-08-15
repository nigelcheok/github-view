<template>
  <div class="about">
    <h1>{{ `${username}'s Project: ${project}` }}</h1>
    <!--<div class="projects">-->
      <!--<div v-for="project in projects">-->
        <!--{{ project.name }}-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>


<script>
import { Service } from '../services/Service';

export default {
  name: 'user',

  data() {
    return {
    };
  },

  computed: {
    username() {
      return this.$route.params.username;
    },
    project() {
      return this.$route.params.project;
    },
  },

  mounted() {
    this.getProjectDescription(this.username, this.project);
  },

  methods: {
    async getProjectDescription(username, project) {
      const response = await Service.getProjectReadme(username, project);
      console.log(atob(response.data.content));
    },
  },
};
</script>

<style scoped>
  .projects {
    text-align: left;
  }
</style>
