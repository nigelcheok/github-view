<template>
  <div class="owner">
    <h1>{{ `${username}'s Projects` }}</h1>
    <div class="projects">
      <div v-for="project in projects">
        <div class="project" @click="goToProject(username, project.name)">{{ project.name }}</div>
      </div>
    </div>
  </div>
</template>


<script>
import { Service } from '../services/Service';

export default {
  name: 'user',

  data() {
    return {
      projects: [],
    };
  },

  computed: {
    username() {
      return this.$route.params.username;
    },
  },

  mounted() {
    this.getProjectsFromUser(this.username);
  },

  methods: {
    async getProjectsFromUser(username) {
      const response = await Service.getProjectsFromUser(username);
      this.projects = response.data;
    },

    goToProject(username, project) {
      this.$router.push({ path: `${username}/${project}` });
    },
  },
};
</script>

<style scoped>
  .projects {
    text-align: left;
  }

  .project {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
