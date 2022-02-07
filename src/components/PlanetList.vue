<template>
  <div>
    <table>
      <thead>
        <th>Planet Name</th>
        <td>{{ planet.name }}</td>
        <th>Climate</th>
        <td>{{ planet.climate }}</td>
        <th>Residents</th>
        <td>{{ planet.residents.length }}</td>
        <th>Terrain</th>
        <td>{{ planet.terrain }}</td>
        <th>Population</th>
        <td>{{ planet.population }}</td>
        <th>Surface Water</th>
        <td>{{ planet.surface_water }}</td>
        <th>SW Calculation</th>
      </thead>
    </table>
  </div>
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
  color: yellow;
  border-right: gray 1px solid;
}
td {
  border-right: gray 1px solid;
  width: 100px;
  word-wrap: break-word;
}
thead {
  background-color: black;
  opacity: 0.7;
}
table {
  word-wrap:break-word;
  margin-left: auto;
  margin-right: auto;
  border: solid gray 1px;
  background-color: black;
  opacity: 0.7;
}
</style>