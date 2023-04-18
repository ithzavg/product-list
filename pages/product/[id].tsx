import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { TProduct } from 'index';

const ProductItem = () => {
  const {
    query: {id},
  } = useRouter();

  const [product, setProduct] = useState<TProduct | null >(null);

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
    .then(response => response.json())
    .then((data: TProduct) => {
      setProduct(data)
    })
  }, [id])
  return (
    <div>
      item {product?.name}
    </div>
  )
}

export default ProductItem
