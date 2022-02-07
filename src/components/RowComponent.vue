<template>
  <tr>
    <td>
      <a v-bind:href="`${planet.url}`" target="_blank">{{ planet.name }}</a>
    </td>
    <td>{{ planet.climate }}</td>
    <td>{{ planet.residents.length }}</td>
    <td>{{ planet.terrain }}</td>
    <td v-if="planet.population === 'unknown'">?</td>
    <td v-else>{{ planet.population }}</td>
    <td v-if="planet.surface_water === 'unknown'">?</td>
    <td v-else>
      {{
        Math.round(
          (planet.diameter / 2) ** 2 * 4 * 3.14 * (planet.surface_water * 0.01)
        ) ** 2
      }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "RowComponent",
  props: {
    planet: Object,
  },
};
</script>

<style scoped>
td {
  text-align: center;
  padding: 5px;
  border: gray 1px solid;
  background-color: black;
  opacity: 0.7;
  width: 175px;
}
</style>