<template>
  <div id="container">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/trending">Trending</router-link></li>
        <li><router-link to="/upcoming">Upcoming</router-link></li>
        <li><router-link to="/top-rated">Top Rated</router-link></li>
        <li><router-link to="/popular">Popular</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  margin: 0 auto;
  max-width: 900px;
}

nav {
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  li {
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
    a {
      color: #333;
      font-weight: bold;
      text-decoration: none;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
@media (min-width: 768px) {
  ul {
    li {
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
