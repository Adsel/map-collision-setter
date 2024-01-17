<template>
  <aside id="default-sidebar"
         class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-primary-2 text-white">
      <ul class="space-y-2 font-medium">
        <li>
            <h1>
              <img src="@/assets/logo/logotype.png"
                   width="32"
                   height="32"
                   alt="Simple Adventure logotype"
                   class="inline">
              Simple Adventure
              Management Tool
            </h1>
        </li>
          <SideMenuItem title="Dashboard">
            <img width="32"
                 height="32"
                 src="@/assets/icons/stats.svg"
                 alt="Dashboard icon"/>
          </SideMenuItem>
          <SideMenuItem title="Maps" :counter="2">
            <img width="32"
                 height="32"
                 src="@/assets/icons/landscape.svg"
                 alt="Maps icon"/>
          </SideMenuItem>
          <SideMenuItem title="Collisions">
            <img width="32"
                 height="32"
                 src="@/assets/icons/collisions.svg"
                 alt="Collisions icon"/>
          </SideMenuItem>
          <SideMenuItem title="Players">
            <img width="32"
                 height="32"
                 src="@/assets/icons/superhero.svg"
                 alt="Players icon"/>
          </SideMenuItem>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div class="grid grid-cols-3 gap-4 mb-4">
       CONTENT
      </div>
    </div>
  </div>
</template>
<script>

import SideMenuItem from "@/components/partials/side-menu/SideMenuItem.vue";

export default {
  name: 'SideMenu',
  components: {SideMenuItem},
  setup(){
    return {};
  }
}
</script>
<style lang="scss">

h1 {
  font-size: 1.5rem !important;
}
img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

// TODO:
// change color in presets
.bg-color-primary {

}
</style>
