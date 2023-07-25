import 'bootstrap/dist/css/bootstrap.css';
import { memo } from 'react';

function ProductItem({ product, addToCart }) {
    const handleAddBtn = () => {
        addToCart(product)
        alert('Success!')
    }

    return (
        <div className="col-4">
            <div className="card col-4" style={{ width: "100%", margin: "18px 0", minHeight: "354px", maxHeight: "" }}>
                <img style={{ maxWidth: '200px', height:'200px', margin: '0 auto' }} src={product.images[0]} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5
                        className="card-title"
                    >
                        {product.title}
                    </h5>
                    <p className="card-text" style={{ height:'75px'}}>{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <a
                        href="#"
                        className="btn btn-primary"
                        onClick={handleAddBtn}
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductItem);