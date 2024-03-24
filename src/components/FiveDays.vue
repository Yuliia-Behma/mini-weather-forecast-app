<template>
  <div class="child-wraper" v-for="item in weather.list" :key="item.dt">
    <CardForTimestamp :item="item"></CardForTimestamp>
  </div>
</template>

<script>
import CardForTimestamp from "./CardForTimestamp.vue"

export default {
  name: 'FiveDays',
  components: {
    CardForTimestamp
  },
  props: {
    weather: Object
  },
  setup() {

    return {
      
    }
  }
}
</script>

<style scoped>

</style>
