import { Row, Col } from "react-bootstrap";
import products from "../product-mockData.js";
import React from "react";
import Product from "../components/Product.jsx";

const HomeScreen = () => {
  console.log(products); // This will log the entire array of products

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* Loop array แล้วค่อยนำ ก้อน Object หรือ Mock Data ส่งไปยัง Props */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} /> {/* Pass individual product here */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
