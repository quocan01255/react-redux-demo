import 'bootstrap/dist/css/bootstrap.css';
import { memo, useMemo } from 'react';

function CartItem({id, images, title, category, price, remove}) {
    return (
        <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
            <div className="media d-block d-sm-flex text-center text-sm-left">
                <a className="cart-item-thumb mx-auto mr-sm-4" href="#"><img src={images[0]} alt="Product" style={{ maxHeight: '150px', maxWidth: '150px', marginRight: '12px' }} /></a>
                <div className="media-body pt-3">
                    <h3 className="product-card-title font-weight-semibold border-0 pb-0"><a href="#">{title}</a></h3>
                    <div className="font-size-sm"><span className="text-muted mr-2">Category: </span>{category}</div>
                    <div className="font-size-lg text-primary pt-2">${price}</div>
                </div>
            </div>
            <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ maxWidth: '10rem' }}>
                <button className="btn btn-outline-danger btn-sm btn-block mb-2" type="button" onClick={() => remove(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 mr-1">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>Remove</button>
            </div>
        </div>
    )
}

function Cart({ cartList, removeFromCart }) {
    const totalPrice = useMemo(() => {
        const result = cartList.reduce((result, product) => {
            return result + product.price
        }, 0)
        return result;
    }, [cartList])

    return (
        <div className="container pb-5 mt-n2 mt-md-n3" >
            <div className="row">
                <div className="col-xl-9 col-md-8">
                    <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-light"><span>Products</span><a className="font-size-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left" style={{ width: '1rem', height: '1rem' }}><polyline points="15 18 9 12 15 6"></polyline></svg>Continue shopping</a></h2>
                    {cartList.map(product => (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            images={product.images}
                            category={product.category}
                            price={product.price}
                            remove={removeFromCart}
                        />
                    ))}
                </div>
                <div className="col-xl-3 col-md-4 pt-3 pt-md-0">
                    <h2 className="h6 px-4 py-3 bg-light text-center">Subtotal</h2>
                    <div className="h3 font-weight-semibold text-center py-3">${totalPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default memo(Cart)