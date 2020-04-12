<template>
  <div id="app">
    <h1>count: {{this.$store.state.count}}</h1>
    <button @click="countIncrease">点击赋值</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    countIncrease() {
      const v = 100;
      this.$store.commit('countIncrease', v);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
