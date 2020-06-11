import Home from '@/pages/Home'
import Page1 from '@/pages/Home/Page1'

const routerConfig = [
  {
    path: '/home/page1',
    component: Page1
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default routerConfig