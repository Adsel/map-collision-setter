<template>
  <li>
    <a href="#"
       class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <slot></slot>
      <span class="ms-3">{{ title }}</span>
      <span v-if="counter"
            class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
        {{ counter }}
      </span>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    counter: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
  },
  setup() {

  }
}
</script>
