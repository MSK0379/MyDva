/*
 * @Author: MSK 
 * @Date: 2019-06-02 18:56:58 
 * @Last Modified by: miao.shike
 * @Last Modified time: 2019-08-29 16:15:18
 */
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = (props) => {
  const { handleDelete, productsTest } = props;
  const { products } = productsTest;
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};
const mapStateToProps = ({ productsTest }, ownProps) => {
  return {
    productsTest,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete(id) {
      dispatch({
        type: 'productsTest/delete',
        payload: id,
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);