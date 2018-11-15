<template>
  <div class="children">
    <slot></slot>
    <button @click="display">显示</button>
  </div>
</template>

<script>

export default {
  name: 'children',
  methods: {
    display () {
      this.$emit('children', 'Hello word')
    }
  }
}

</script>
<style scoped>

</style>
