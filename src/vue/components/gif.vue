<template>
<div>
  <div class="gif" @click="dialogVisible = true" v-on:mouseenter="in_gif()" v-on:mouseleave="out_gif()">
    <img :src="play || test ? data.images.fixed_height_small.url : data.images.fixed_height_small_still.url">
  </div>
  <el-dialog title="Gif" :visible.sync="dialogVisible" width="720px">
    <img :src="data.images.original.url">
  </el-dialog>
</div>
</template>
<script>
export default {
  props: ["data", "test"],
  data() {
    return {
      play: false,
      dialogVisible: false
    };
  },
  methods: {
    in_gif: function() {
      this.play = true;
    },
    out_gif: function() {
      this.play = false;
    },
    load: function() {
      this.play = this.test;
    }
  },
  mounted: function() {
    this.load();
  },
  watch: {
    test: function(newv, oldv) {
      this.play = this.test;
    }
  }
};
</script>
<style lang="scss">
.gif {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 15px;
    border: 1px solid #ebebeb;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 56.25%;
    }
    &>img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
}
</style>