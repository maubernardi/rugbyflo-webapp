import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import uploadFile from '@/components/UploadFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: HelloWorld
    },
    {
      path: '/upfile',
      name: 'upl-file',
      component: UploadFile
    }
  ]
})
