<template>
  <div class="repos-view">
    <h2 class="repos-header">Github repositories</h2>
    <div class="loading" v-if="isLoading">
      <loader />
    </div>
    <div v-else-if="error">{{ error }}</div>

    <transition-group v-else tag="ul" name="list" appear>
      <li v-for="repo in paginatedData" :key="repo.id">
        <router-link
          :to="{ name: 'Repo', params: { id: repo.name } }"
          class="repos-li-tag"
        >
          <p class="repos-list">{{ repo.name }}</p>
        </router-link>
      </li>
    </transition-group>
    <div>
      <button class="paginate" v-if="currentPage > 1" @click="currentPage--">
        Previous
      </button>
      <button
        class="paginate"
        v-if="currentPage < pageCount"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      repos: [],
      error: "",

      currentPage: 1,
      pageSize: 5,
    };
  },

  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.repos.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.repos.length / this.pageSize);
    },
  },

  mounted() {
    this.fetchReposFromLocalStorage();
  },
  methods: {
    async fetchRepos() {
      this.isLoading = true;
      try {
        const response = await fetch(
          "https://api.github.com/users/Pisces2802/repos"
        );
        const data = await response.json();
        this.repos = data;
        localStorage.setItem("repos", JSON.stringify(data));
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
    fetchReposFromLocalStorage() {
      const data = localStorage.getItem("repos");
      if (data) {
        this.repos = JSON.parse(data);
      }
      this.fetchRepos();
    },
  },
};
</script>

<style>
.repos-header {
  color: #060047;
  padding-top: 10px;
}

li .repos-li-tag {
  text-decoration: none;
}
.repos-list {
  background: #e0dede;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 90%;
  cursor: pointer;
  color: #444;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
}

.repos-list:hover {
  background: #ddd;
}
.repos-view {
  width: 90%;
  margin: 80px auto;
  background: rgb(252, 239, 239);
  border-radius: 4px;
  /* border: 1px solid crimson; */
}

.loading {
  font-size: large;
  font-weight: bold;
  text-align: center;
  color: #555;
  margin: 1em 0;
}

.paginate {
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #00235b;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  cursor: pointer;
  margin: 10px;
}

.paginate:hover {
  opacity: 0.56;
  box-shadow: -9px 9px 10px 1px rgba(211, 211, 211);
}
.list-enter-from {
  opacity: 0;
  transform: scale(0.3);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 1s ease;
}
</style>
