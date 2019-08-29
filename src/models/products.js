/*
 * @Author: MSK 
 * @Date: 2019-06-02 18:56:35 
 * @Last Modified by: miao.shike
 * @Last Modified time: 2019-08-29 16:24:54
 */
import { getData } from '../../mock/base/test';

export default {
  namespace: 'productsTest',
  state: {
    products: []
  },
  reducers: {
    save (state, { payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    delete(state, { payload: id }) {
      return {
        products: state.products.filter(item => item.id !== id),
      };
    },
  },
  effects: {
    *getData({_}, { put }) {
      const resp  = yield getData();
      if (resp) {
        yield put({
          type: 'save',
          payload: {
            products: resp.products || [],
          },
        });
      }
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        // if (pathname === '/') {
          dispatch({
            type: 'getData',
          });
        // }
      });
    },
  },
};