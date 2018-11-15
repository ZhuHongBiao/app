<template>
  <div>
    <p>This is apple component <span>{{ this.$store.state.totalPrice }}</span></p>
    <button @click="addApple">Add price</button>
    <button @click="decApple">Increase price</button>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      price: 5
    }
  },
  methods: {
    addApple () {
      this.$store.commit('add', this.price)
    },
    decApple () {
      this.$store.commit('decrease', this.price)
    }
  }
}

</script>
<style scoped>

</style>
