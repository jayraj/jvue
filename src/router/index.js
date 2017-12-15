import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Result from '@/components/Result'
import LeagueTable from '@/components/LeagueTable'
import Newmatch from '@/components/Newmatch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
    {
      path: '/LeagueTable',
      name: 'LeagueTable',
      component: LeagueTable
    },
    {
      path: '/Newmatch',
      name: 'Newmatch',
      component: Newmatch
    }
  ]
})
