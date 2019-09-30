<template>
  <el-container>
    <el-header>Search gifs</el-header>
    <el-main>
      <form-search/>
    </el-main>
  </el-container>
</template>
<script>
import formSearch from "./components/form.vue";

export default {
  data() {
    return {
      test: null
    };
  },
  components: {
    formSearch
  },
  mounted: function() {
    this.loaded();
  },
  methods: {
    loaded: function() {
      console.log("ready!!!");
    }
  }
};
</script>