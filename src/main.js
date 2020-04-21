import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem ,Search,Col, Row, Button,Swipe, SwipeItem,Tab, Tabs , Grid, GridItem,Sidebar, SidebarItem,GoodsAction, GoodsActionIcon, GoodsActionButton , Card } from 'vant';

Vue.use(Vant).use(Tabbar).use(TabbarItem).use(Search).use(Col).use(Row).use(Button).use(Swipe)
.use(SwipeItem).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Sidebar).use(SidebarItem).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Card);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
