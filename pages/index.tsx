import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Navbar from '@components/Navbar/Navbar';
import { TAPIAvoResponse, TProduct } from '../index';

export const getServerSideProps = async () => {
 const response = await fetch('/api/avo');
 const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    }
  }
}

const Home = ({productList}: {productList: TProduct[]}) => {

  return (
    <div>

      <h1>Hola Ithza</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default Home;
