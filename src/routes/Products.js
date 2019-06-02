/*
 * @Author: MSK 
 * @Date: 2019-06-02 18:56:58 
 * @Last Modified by: MSK
 * @Last Modified time: 2019-06-02 19:07:01
 */
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);(({ products }) => ({
  products,
}))(Products);