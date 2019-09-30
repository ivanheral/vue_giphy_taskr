import Vue from 'vue';
import Router from 'vue-router';
import Newrouter from './routes/routes.js';
import Element from 'element-ui';
import Nav from './components/nav.vue';
Vue.use(Element);
Vue.use(Router);

new Vue({
  el: '#app',
  router: Newrouter,
  components: {
    menu_app: Nav
  },
  template: `<div>
             <div class="container">
             <menu_app />
             <el-main><router-view class="view"></router-view></el-main>
             </div>
             </div>`
})