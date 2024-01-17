<template>
  <div>
    <h1>Map Collision Setter</h1>
    <BackgroundImage @changed-collision="onChangedCollisions"></BackgroundImage>
    <OutputFormatter :collisionArray="collisionArray"></OutputFormatter>
  </div>
</template>

<script>
import BackgroundImage from "@/components/partials/BackgroundImage.vue";
import OutputFormatter from "@/components/partials/OutputFormatter.vue";
import {ref} from "vue";

export default {
  name: 'CollisionTool',
  components: {
    BackgroundImage,
    OutputFormatter
  },
  setup() {
    const collisionArray = ref([]);

    const onChangedCollisions = (newCollisionArr) => {
      collisionArray.value = newCollisionArr;
    };

    return {
      collisionArray,
      onChangedCollisions
    }
  }
}
</script>

<style>
</style>
