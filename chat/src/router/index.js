import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/components/chat/chat'
import login from '@/components/login'
import index from '@/components/index'
import chat_index from '@/components/chat/chat_index'
import group_index from '@/components/group/group_index'
import file_index from '@/components/file/file_index'
import upload from '@/components/file/upload'
import group_chat from '@/components/group/group_chat'
import init_group from '@/components/group/init_group'
import power_index from '@/components/power/power_index'
import adduser from '@/components/power/adduser'
import rmvuser from '@/components/power/rmvuser'
import addadmin from '@/components/power/addadmin'
import rmvadmin from '@/components/power/rmvadmin'
import files from '@/components/file/files'
import self_index from '@/components/self/self_index'
import message from '@/components/self/message'
import chg_pwd from '@/components/self/change_pwd'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/chat_index',
      children: [{
          path: '/chat_index',
          name: 'chat_index',
          component: chat_index
        },
        {
          path: '/group_index',
          name: 'group_index',
          component: group_index,
          children: [{
              path: '/group_index/chat',
              name: 'group_chat',
              component: group_chat,
            },
            {
              path: '/group_index/init_group',
              name: 'init_group',
              component: init_group,
            },
          ]
        },
        {
          path:'/self_index',
          name:'self_index',
          component: self_index,
          children:[{
            path:'/self_index/message',
            name:"message",
            component:message
          },
          {
            path:'/self_index/chg_pwd',
            name:"chg_pwd",
            component:chg_pwd
          }]
        },
        {
          path: '/power_index',
          name: 'power_index',
          component: power_index,
          children: [{
              path: '/power_index/adduser',
              name: 'adduser',
              component: adduser,
            },
            {
              path: '/power_index/rmvuser',
              name: 'rmvuser',
              component: rmvuser,
            },
            {
              path: '/power_index/addadmin',
              name: 'addadmin',
              component: addadmin,
            },
            {
              path: '/power_index/rmvadmin',
              name: 'rmvadmin',
              component: rmvadmin,
            },
          ]
        },
        {
          path: '/file_index',
          name: 'file_index',
          component: file_index,
          children: [{
            path: '/file_index/upload',
            name: 'file_index/upload',
            component: upload,
          },
          {
            path: '/file_index/files',
            name: 'file_index/files',
            component: files,
          }]
        },
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
    }
  ]
})
