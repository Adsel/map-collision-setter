<template>
  <div class="ct-background__wrapper">
    <div class="ct-background__placeholder"
         v-if="!mapInfo || !mapInfo.sourceUrl">
      <label for="fileUpload"
             class="ct-background__upload-label">
        <img src="@/assets/icons/upload.svg"
             alt="Upload icon"
             class="ct-background__upload-icon">
      </label>
      <input type="file"
             id="fileUpload"
             name="avatar"
             accept="image/png, image/jpeg"
             @change="onFileChange" />
    </div>
    <template v-else>
      <div class="ct-background__info">
        {{ mapInfo.imageName }}
        ({{ mapInfo.width }} x {{ mapInfo.height }}px)
      </div>
      <div class="ct-background" :style="{
        backgroundImage: 'url(\'' + mapInfo.sourceUrl + '\')',
        width: 2 * mapInfo.width + 'px',
        height: 2 * mapInfo.height + 'px'
      }">
      </div>
      <div class="ct-areas">
        <div v-for="(row, rowIndex) in collisionGrid"
             :key="rowIndex"
             class="ct-area-row">
          <div v-for="(w, x) in row"
               :key="x"
               class="ct-area-item"
               :class="{'ct-area-item--collision': w}"
               @click="toggleCollision(rowIndex, x)"></div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
const PIXEL_SIZE = 16;

import {ref} from "vue";

export default {
  name: 'BackgroundImage',
  components: {},
  emit: [
      'changed-collision'
  ],
  setup() {
    const mapInfo = ref({});
    const collisionGrid = ref([]);

    const onFileChange = ($event) => {
      const files = $event.target.files || $event.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const img = new Image();
      const file = files[0];
      const imageSource = URL.createObjectURL(file);
      img.src = imageSource;
      img.onload = () => {
        if (img.width % PIXEL_SIZE !== 0 || img.height % PIXEL_SIZE !== 0) {
          alert('Invalid image dimension!');
          return;
        }

        mapInfo.value = {
          pixelSize: PIXEL_SIZE,
          width: img.width,
          height: img.height,
          sourceUrl: imageSource,
          imageName: file.name,
        }

        const grid = [];
        for (let y = 0; y < mapInfo.value.height / mapInfo.value.pixelSize; y++) {
          grid[y] = [];
          for (let x = 0; x < mapInfo.value.width / mapInfo.value.pixelSize; x++) {
            grid[y][x] = false;
          }
        }

        collisionGrid.value = grid;
      };
    };

    const toggleCollision = (y, x) => {
      collisionGrid.value[y][x] = !collisionGrid.value[y][x];
    };

    return {
      collisionGrid,
      mapInfo,
      onFileChange,
      toggleCollision,
    }
  }
}
</script>
<style>
.ct-background__info {
  position: absolute;
  top: -20px;
}

.ct-background__wrapper {
  position: relative;
}

.ct-background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-size: contain;
  background-repeat: no-repeat;

  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  image-rendering: -webkit-optimize-contrast;
}

.ct-area-row {
  display: flex;
}

.ct-area-item {
  border: 1px solid black;
  width: calc(2 * 15px);
  height: calc(2 * 15px);
  cursor: pointer;
}

.ct-area-item--collision {
  background-color: rgba(0, 0 ,0, 0.6);
}

.ct-background__upload-label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ct-background__upload-icon {
  width: 100px;
  height: 100px;
}

input[type='file'] {
  display: none;
}
</style>
