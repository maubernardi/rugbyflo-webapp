<template>
    <div id="div-upload-file">
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Home page</a>
        <br/>
        <label>File upload</label>
        <file v-model="upload"></file>
        <button :disabled="submitDisabled" @click="doUpload">Invia</button>
    </div>

</template>

<script>
import router from "../router";

export default {
  name: 'upl-file'
};
window.vueApp = new Vue({
  el: "#div-upload-file",
  data: {
    submitDisabled: false
  },
  watch: {
    upload: function(value) {
      this.submitDisabled = value != null;
    }
  },
  methods: {
    doUpload: function() {},
    navigate() {
      router.push({ name: "main-page" });
    }
  }
});
</script>