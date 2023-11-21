import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
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
