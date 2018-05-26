<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Gestione APP</h2>
    <ul>
      <li>
        <router-link to="/upfile">
          Caricamento file
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main-page',
  data () {
    return {
      msg: 'Rugby Florentia - App Manager'
    }
  }, 
  methods: {
    onClick: function() {
      alert('Cliccato Link');
      router.push("Uploadfile");
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
