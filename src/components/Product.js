import React from "react";
import { Card } from "react-bootstrap";

const Product = () => {
  return <div>
    <Card className="my-3 -3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
    </Card>
  </div>;
};

export default Product;
