<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input placeholder="Please input" v-model="word"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input-number v-model="value" :step="3" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="search" icon="el-icon-search">SEARCH</el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="play">PLAY</el-checkbox>
    </el-form-item>
    <el-row :gutter="15" style="margin-top: 15px;">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="gif in gifs" :key="gif.id">
        <Gif :data="gif" :test="play"/>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import Gif from "../components/gif.vue";
import axios from "axios";

export default {
  data() {
    return {
      word: "",
      gifs: [],
      play: false,
      value: 18,
      play: false
    };
  },
  components: { Gif },
  methods: {
    search: function() {
      var url = `https://api.giphy.com/v1/gifs/search?api_key=7Mk9u0zmdRI4L39b3sYF8BKkroGiLzRL&q=${
        this.word
      }&limit=${this.value}&offset=0&rating=G&lang=en`;

      axios
        .get(url)
        .then(response => {
          this.gifs = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>