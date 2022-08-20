import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    console.log(params.ProductId)

  return (
    <section>
      <h1>Product Detail</h1>
        <p>{params.ProductId}</p>
    </section>
  );
};

export default ProductDetail;
