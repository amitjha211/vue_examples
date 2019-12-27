<template>
  <div id="app" class="col-md-12">

    <test />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import test from './components/test'

export default {
  name: 'App',
  components: {
    test
    ,HelloWorld
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
