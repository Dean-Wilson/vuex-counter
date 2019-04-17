<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="increment">+1</button>
    <p>Square root is {{sqrt}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['sqrt'])
  },
  methods: {
    // placeholder - usually we will have local methods here then spread the store methods into it
    custom () {
      return true
    },
    ...mapActions(['increment'])
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
