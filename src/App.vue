<template>
  <img alt="Star Wars Logo" src="./assets/logo.png" />
  <StarWarsAPI msg="Planet List" />
</template>

<script>
import StarWarsAPI from "./components/StarWarsAPI.vue";

export default {
  name: "App",
  components: {
    StarWarsAPI,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-image: url("./assets/starwarsbg.jpeg");
}
</style>
