<template>
  <div id="movie-card">
    <img :src="imgUrl + movie.backdrop_path" class="movie-img" />
    <div class="text">
      <div class="title">
        <h5 v-if="!movie.media_type || movie.media_type == 'movie'">
          {{ movie.title }} ({{ getYear(movie.release_date) }})
        </h5>
        <h5 v-else>{{ movie.name }} ({{ getYear(movie.first_air_date) }})</h5>
      </div>
      <div class="details">
        <h5>{{ movie.vote_average.toFixed(1) }} Rating</h5>
        <h5>{{ fullDate(movie.release_date || movie.first_air_date) }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_URL } from "./../config.js";
import { getFullDate, getFullYear } from "../utils/dateUtils";

export default {
  props: {
    movie: {
      type: Object,
    },
  },
  data() {
    return {
      imgUrl: IMG_URL,
    };
  },
  methods: {
    getYear(date) {
      return getFullYear(date);
    },
    fullDate(date) {
      return getFullDate(date);
    },
  },
};
</script>

<style lang="scss" scoped>
h5 {
  margin: 0;
  margin-top: 10px;
  font-size: 13px;
}

.text {
  padding: 10px;
  padding-bottom: 50px;
}

.title {
  h5 {
    height: 20px;
  }
}

#movie-card {
  border: 1px solid #ccc;
  // max-width: 300px;
  // box-shadow: 1px 2px 20px #ccc;
}

.movie-img {
  height: 180px;
  object-fit: cover;
  width: 100%;
}

.details {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

@media (min-width: 768px) {
  h5 {
    font-size: 13px;
  }
}
</style>
