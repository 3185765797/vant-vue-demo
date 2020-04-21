import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const My= ()=> import( "../views/my.vue")
const Find= ()=> import( "../views/find.vue")
const Cat= ()=> import( "../views/cat.vue")
const Cate= ()=> import( "../views/catelist.vue")
const Frist= ()=> import( "../views/label01.vue")
const Second= ()=> import( "../views/label03.vue")
const Third= ()=> import( "../views/label02.vue")
const Details= ()=> import( "../views/details.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:"/home/frist"
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
      path:"frist",
      component:Frist
    },
    {

      path:"second",
      component:Second
    },
   {

      path:"third",
      component:Third
    },

    ]
  },
  {
    path:"/my",
    component:My
  },
  {
    path:"/details",
    component:Details
  },
  {
    path:"/find",
    component:Find
  },
  {
    path:"/cate",
    component:Cate
  },
  {
    path:"/cat",
    component:Cat
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
