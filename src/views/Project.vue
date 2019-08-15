<template>
  <div class="about">
    <h1>{{ `${username}'s Project: ${project}` }}</h1>
    <div class="content">
      <VueMarkdown v-if="content !== undefined">{{ content }}</VueMarkdown>
    </div>
  </div>
</template>


<script>
import VueMarkdown from 'vue-markdown';
import { Service } from '../services/Service';

export default {
  name: 'user',

  components: {
    VueMarkdown
  },

  data() {
    return {
      content: undefined,
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
      this.content = atob(response.data.content);
    },
  },
};
</script>

<style scoped>
  .projects {
    text-align: left;
  }
  .content {
    text-align: left;
    padding: 20px;
  }
</style>
