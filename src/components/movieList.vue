<template>
  <div>
    <h4 v-if="!isLoading">{{ heading }}</h4>
    <div id="movie-list">
      <div class="items" v-for="movie in movies" :key="movie.id">
        <movie-card-vue :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import movieCardVue from "./movieCard.vue";
import Axios from "axios";
import { API_KEY, BASE_URL } from "./../config.js";

export default {
  components: {
    movieCardVue,
  },
  props: {
    keyword: {
      type: String,
      default: "trending",
    },
    heading: {
      type: String,
      default: "Trending this week",
    },
    numberOfMovies: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    Axios.get(`${BASE_URL}${this.keyword}?api_key=${API_KEY}`)
      .then((res) => {
        this.movies = res.data.results.slice(0, this.numberOfMovies);
        this.isLoading = false;
      })
      .catch(() => (this.isLoading = false));
  },
};
</script>

<style scoped>
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

@media (min-width: 450px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 768px) {
  #movie-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
