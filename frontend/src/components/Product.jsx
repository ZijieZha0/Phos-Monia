import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating';


const Product = props => {
    return (
        <Card className='my-3 p-3 rounded border-0'>
            <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant='top' className='card-img'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${props.product._id}`}>
                    <Card.Title as='div' className='product-title'>
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={props.product.rating} text={`${props.product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${props.product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;