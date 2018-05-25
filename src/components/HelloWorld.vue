<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Gestione APP</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Caricamento file
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Rugby Florentia 4App',
  data () {
    return {
      msg: 'Rugby Florentia - App Manager'
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
