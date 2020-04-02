<template>
    <HelloWorld h1="Amukelo" 
                h2="Gugulethu" 
                h3="Nkuthalo N"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'HomeIndex',
  components: {
    HelloWorld
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
