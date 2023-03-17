<template>
  <div class="repo-page">
    <h2 class="repo-header">Individual Repository</h2>
    <p>
      This is a nested route from the Repository page. Click on the link to
      redirect you to the Github repository
    </p>
    <a
      class="anchor-repo-link"
      :href="`https://github.com/Pisces2802/${id}`"
      target="_blank"
      rel="noopener noreferrer"
      ><p class="repo-list">{{ id }}</p></a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>

h2, p {
    font-family: 'Courier New', Courier, monospace;
}
.anchor-repo-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.anchor-repo-link:hover {
  color: steelblue;
  background: #ddd;
}

.repo-header {
  color: #060047;
  padding-top: 10px;
}
.repo-page {
  width: 90%;
  margin: 80px auto 0;
  background: rgb(245, 248, 252);
  border-radius: 4px;
}
.repo-list {
  background: #eeeeee;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 90%;
  cursor: pointer;
  color: #444;
  text-decoration: none;
}

.repo-list:hover {
  background: #ddd;
}
</style>
