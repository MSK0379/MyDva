import { dynamicWrapper } from './index';

export default (app) => {
  return {
    '/products': {
      name: '产品列表',
      component: dynamicWrapper(app, [
        'board/components/boardSetting',
      ], () => import('routes/Board/OrderBoard')),
    },
    '/board/purchase': {
      name: '采购看板',
      component: dynamicWrapper(app, [
        'board/components/boardSetting',
      ], () => import('routes/Board/PurchaseBoard')),
    },
  }
}