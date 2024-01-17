<template>
  <div class="ct-output">
    <span v-for="(collision, index) of collisionsArr" :key="index">

      { x: {{ collision.x }}, y: {{ collision.y }} }
    </span>
    <slot></slot>
  </div>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
  props: {
    collisionArray: {
      type: Array,
      required: false,
    }
  },
  name: 'BackgroundImage',
  components: {
  },
  setup(props) {
    const collisionsArr = ref([]);

    watchEffect(() => {
      const collisionArr = props.collisionArray;
      if (!collisionArr || collisionArr[0] === undefined || collisionArr[0][0] === undefined) {
        return;
      }

      const collisions = [];
      for (let y = 0; y < collisionArr.length; y++) {
        for (let x = 0; x < collisionArr[y].length; x++) {
          if (!collisionArr[y][x]) {
            continue;
          }
          collisions.push({
            x,
            y
          })
        }
      }

      collisionsArr.value = collisions;
    });

    return {
      collisionsArr,
    }
  }
}
</script>

<style>
.ct-output {
  background-color: red;
  min-height: 100px;
  margin-top: 1rem;
}
</style>
