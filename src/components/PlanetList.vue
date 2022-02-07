<template>
  <th>Planet Name</th>
  <th>Climate</th>
  <th>Residents</th>
  <th>Terrain</th>
  <th>Population</th>
  <th>Water Surface Area</th>
</template>

<script>
export default {
  props: {
    planet: Object,
    planets: [],
  },
};
</script>

<style scoped>
th {
  padding: 5px;
  font-size: 1.2em;
  color: rgb(235, 210, 66);
  border: gray 1px solid;
  width: 175px;
  background-color: black;
  opacity: 0.7;
}
</style>