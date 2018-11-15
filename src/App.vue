<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span>{{ this.$store.state.totalPrice }}</span>
    <part-a></part-a>
    <part-b></part-b>
  </div>
</template>

<script>
// import Vue from 'vue'
import partA from './components/partA'
import partB from './components/partB'
export default {
  name: 'App',
  components: {
    partA,
    partB
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
