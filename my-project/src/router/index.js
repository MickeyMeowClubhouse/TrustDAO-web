import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import DesignSketch from '@/components/DesignSketch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/DesignSketch',
      name: 'DesignSketch',
      component: DesignSketch
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
  ]
})
