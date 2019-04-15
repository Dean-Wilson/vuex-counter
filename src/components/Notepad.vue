<template>
  <div class="notepad">
    <hr>
    <h1>Notepad Component with Count = {{ count }}</h1>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Notepad',
  computed: mapState(['count']),
  methods: {
    // placeholder - usually we will have local methods here then spread the store methods into it
    custom () {
      return true
    },
    ...mapMutations(['increment'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    hr {
        margin-top: 30px;
    }
</style>
