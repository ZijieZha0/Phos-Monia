import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();
  
    return isLoading ? null : error ? (
      <Message variant='danger'>{error?.data?.message || error.error}</Message>
    ) : (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}> {/* 调整容器的 maxWidth */}
        <Carousel pause='hover' className='bg-primary mb-4'>
          {products.map((product) => (
            <Carousel.Item key={product._id} style={{ width: '800px', height: '500px' }}> {/* 调整 Carousel.Item 的尺寸 */}
              <Link to={`/product/${product._id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption className='carousel-caption'>
                  <h2 className='text-white text-right'>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };

export default ProductCarousel;