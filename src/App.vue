<template>
  <div id="app" class="container">
    <!--<img src="./assets/logo.png">-->


    <router-link to="LeagueTable" class="btn btn-primary"> LeagueTable</router-link>
    <router-link to="Result" class="btn btn-primary"> Result</router-link>
    <router-link to="Newmatch" class="btn btn-primary"> Newmatch</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
