<template>
  <div class="parent-container">
    <div class="child-wraper" v-for="item in weather.list" :key="item.dt">
      <CardForTimestamp :item="item"></CardForTimestamp>
    </div>
  </div>
</template>

<script>
import CardForTimestamp from "./CardForTimestamp.vue";

export default {
  name: "FiveDays",
  components: {
    CardForTimestamp,
  },
  props: {
    weather: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.parent-container{
  width: 100%;
  margin: 10px 0;
  padding-bottom: 50px;
}
.child-wraper{
  width: 100%;
  margin: 8px 0;
}
</style>
