<template>
  <div class="lobby-loader__wrapper">
    <img src="@/assets/icons/hourglass-loader.svg"
         class="lobby-loader__loader"
         alt="Loader"/>
  </div>
</template>
<script>
export default {
  name: 'LoaderComponent',
  setup() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/definitions/images';

.lobby-loader {
  &__wrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 9999;
  }

  &__loader {
    @include pixelArtImage();
    width: 128px;
    height: 128px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 20px 10px;
  }
}
</style>
