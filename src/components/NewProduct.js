// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../redux/CartSlice'

// const NewProduct = () => {

//   const dispatch = useDispatch()

//   const { newProducts } = useSelector(state => state.newProducts)

//   function add(val) {
//     dispatch(addToCart(val))
//   }

//   return (
//     // <div className="container-fluid mt-5 bg-light ">
//     //   <div className='heading heading-center mb-3'>
//     //     <h1 className='title pt-5'>New Arrivels</h1>
//     //     <ul className='d-flex justify-content-center gap-5 pt-3 pb-3'>

//     //       <li>
//     //         <a className='text-dark display-6' href="">Womens Clothing</a>
//     //       </li>

//     //       <li>
//     //         <a className='text-dark display-6' href="">Mens Clothing</a>
//     //       </li>
//     //     </ul>
//     //   </div>
//     //   <div className="row justify-content-center align-items-center">

//     //     {
//     //       newProducts.map((item) => {
//     //         return (
//     //           <div className='col-6 col-md-4 col-lg-3 col-xl-5col '>

//     //             <div className="card border-0 h-auto">
//     //               <img src={item.img} className="card-img-top" alt="..." />
//     //               <div className="card-body" style={{ textAlign: "center" }}>
//     //                 <p className="card-title">{item.category}</p>
//     //                 <a className="card-text text-decoration-none text-dark">{item.name}</a>
//     //                 <p style={{ color: '#cc6666' }}>${item.price}</p>
//     //                 <button className='border-0 btn' onClick={() => add(item)}>ADD-TO CART</button>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         )
//     //       })
//     //     }


//     //   </div>
//     //   <div className="text-center">
//     //     <a href="" className='btn btn-light text-dark border-1 mb-3  button'>Shop More</a>
//     //   </div>
//     // </div>


//   )
// }

// export default NewProduct