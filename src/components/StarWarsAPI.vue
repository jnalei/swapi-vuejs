<template>
  <div class="starwars">
    <h1>{{ msg }}</h1>
    <PlanetList v-for="planet in planets" :key="planet" :planet="planet" />
  </div>
</template>

<script>
import PlanetService from "../services/PlanetService";
import PlanetList from "@/components/PlanetList.vue";

export default {
  components: {
    PlanetList,
  },
  name: "StarWarsAPI",
  props: {
    msg: String,
  },
  data() {
    return {
      planets: [],
    };
  },
  created() {
    PlanetService.getPlanets()
      .then((response) => {
        this.planets = response.data.results.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      })
      .catch((error) => {
        console.log("There was an error:" + error.response);
      });
  },
};
</script>