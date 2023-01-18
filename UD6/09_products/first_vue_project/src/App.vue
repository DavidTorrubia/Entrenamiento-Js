<template>
  <div id="app">
    <div>
      <div>
        <h1>{{ Name }}</h1>
        <h2>{{ Price }}</h2>
      </div>
      <button v-on:click="mostrar = !mostrar">
        ver
      </button>
    </div>
    <p v-if="mostrar">{{ Description }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      Name: "Nombre",
      Price: "Precio",
      Description: "Descripcion",
      mostrar: false
    }
  },
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
