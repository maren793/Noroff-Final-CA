import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import CardSpecificPage from './pages/CardSpecificPage.vue'
import './assets/style.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },

    {
      path: '/cards',
      name: 'cards',
      component: HomePage
    },

    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },

    {
      path: '"/cardSpecific/"+id',
      name: 'cardSpecific',
      Component: CardSpecificPage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
