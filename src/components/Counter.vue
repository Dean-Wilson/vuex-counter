<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count() {
      return window.store.state.count
    }
  },
  methods: {
    increment () {
      window.store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
