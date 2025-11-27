import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../src/components/MainPage.vue";
import MenuPembelian from "../views/MenuPembelian.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/pembelian/:paket",
    name: "MenuPembelian",
    component: MenuPembelian,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
