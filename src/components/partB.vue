<template>
  <div>
    <p>This is bannaer component <span>{{ this.$store.state.totalPrice }}</span></p>
    <button @click="addBannaer">Add price</button>
    <button @click="decBannaer">Increase price</button>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      price: 10
    }
  },
  methods: {
    addBannaer () {
      this.$store.commit('add', this.price)
    },
    decBannaer () {
      this.$store.commit('decrease', this.price)
    }
  }
}

</script>
<style scoped>

</style>
