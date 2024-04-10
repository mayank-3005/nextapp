import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';

export async function getStaticPaths() {
  const res = await axios.get('https://fakestoreapi.com/products');
  const paths = res.data.map((product) => ({
    params: { category: product.category, id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  return { props: { product: res.data } };
}

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const { category, id } = router.query;

  useEffect(() => {
    alert(`Title: ${product.title}\nCategory: ${category}\nID: ${id}`);
  }, [product, category, id]);

  return null;
};

export default ProductDetail;