/*
 * @Author: MSK 
 * @Date: 2019-06-02 18:56:35 
 * @Last Modified by: MSK
 * @Last Modified time: 2019-06-02 19:06:07
 */

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};