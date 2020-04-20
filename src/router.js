import Vue from 'vue';
import VueRouter from "vue-router";

import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Chart from './components/chart/chart'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home, props: true},
  {path: '/chart', component: Chart, props: true},
  {path: '*', component:NotFound, props:true }
]


export const router = new VueRouter({
  mode: 'history',
  routes
});
