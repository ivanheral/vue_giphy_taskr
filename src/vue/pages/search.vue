<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="word" placeholder="Please input" />
    </el-form-item>
    <el-form-item>
      <el-input-number
v-model="value"
:step="3" :max="24" :min="6" />
    </el-form-item>
    <el-form-item>
      <el-button
type="primary"
icon="el-icon-search" @click="search">
        SEARCH
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="play">
        PLAY
      </el-checkbox>
    </el-form-item>
    <el-row
:gutter="15"
style="margin-top: 15px;">
      <el-col
        v-for="gif in gifs"
        :key="gif.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="8"
      >
        <Gif :data="gif" :test="play" />
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import Gif from '../components/gif.vue';
import axios from 'axios';

export default {
  components: { Gif },
  data() {
    return {
      word: '',
      gifs: [],
      play: false,
      value: 18,
      play: false,
    };
  },
  methods: {
    search: function() {
      var url = `https://api.giphy.com/v1/gifs/search?api_key=7Mk9u0zmdRI4L39b3sYF8BKkroGiLzRL&q=${this.word}&limit=${this.value}&offset=0&rating=G&lang=en`;

      axios
        .get(url)
        .then(response => {
          this.gifs = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
  },
};
</script>
