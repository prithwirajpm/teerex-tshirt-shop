import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/cartSlice'
import Pshop from '../Asset/pshope.png'

function Cart() {
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    } else {
      setTotal(0)
    }

  }
  const handleCart = () => {
    dispatch(emptyCart())
    alert("Order successfully Placed.... Thank You for purchasing with us!!!")
    navigate('/')
  }

  useEffect(() => {
    getCartTotal()
  }, [cartArray])
  return (
    <div className='container' style={{ marginTop: '100px' }}>
      {
        cartArray.length > 0 ?
          <div className='row mt-5 mb-5'>
            <div className='col-lg-8'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td><img width={'100px'} height='100px' src={product.image} /></td>
                        <td>${product.price}</td>
                        <td><button className="btn" onClick={() => dispatch(removeFromCart(product.id))}><i className="fa-solid fa-trash text-danger fa-2x"></i></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-3'>
              <div className='border mt-3 p-3 rounded shadow'>
                <h4>Total Product:<span>{cartArray.length}</span></h4>
                <h4 className='mt-3'>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
                <div className='d-grid'>
                  <button className='btn btn-dark mt-5 rounded' onClick={handleCart}>Check Out</button>
                </div>
              </div>
            </div>
          </div>
          :
          <div className='d-flex justify-content-center aligin-items-center'>
            <div>
              <img src={Pshop} alt="" srcset="" width='100%' />
              <h3 className='fw-border text-center'> Your Cart is Empty !!!!</h3>
              <div className='d-flex justify-content-center mb-5'><Link style={{ textDecoration: 'none' }} className='btn btn-dark rounded mt-3' to={'/'}>Back To Home</Link></div>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart