import React from 'react'

const Blog = () => {
  return (
    <div className='container-fluid mt-4 justify-content-center'>
<h2 className='heading heading-center mt-4 pt-5 pb-3'>From Our Blog</h2>
<div className="row">
    <div className="col-lg-3 gap-2">
    <div className="card border-0 h-auto">
      <img src={require('./assets/post-1.jpg')} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title">March 29,2020 | 0 Comments</p>
        <a className="card-text text-decoration-none text-dark" href=''>Sed adipising ornares</a><br />
        <a className='text-decoration-none' style={{color:'#cc6666'}} href="">Continue Reading</a>   
      </div>
    </div>
    </div>
    <div className="col-lg-3 gap-2">
    <div className="card border-0 h-auto">
      <img src={require('./assets/post-2.jpg')} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title">March 29,2020 | 3 Comments</p>
        <a className="card-text text-decoration-none text-dark" href=''>Fusce lacinsvian arcuet nulla.</a><br />
        <a className='text-decoration-none' style={{color:'#cc6666'}} href="">Continue Reading</a>   
      </div>
    </div>
    </div>
    <div className="col-lg-3 gap-2">
    <div className="card border-0 h-auto">
      <img src={require('./assets/post-3.jpg')} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title">March 29,2020 | 3 Comments</p>
        <a className="card-text text-decoration-none text-dark" href=''>Quisque Volutpat MVsattis Eros.</a><br />
        <a className='text-decoration-none' style={{color:'#cc6666'}} href="">Continue Reading</a>   
      </div>
    </div>
    </div>
    <div className="col-lg-3 gap-2">
    <div className="card border-0 h-auto">
      <img src={require('./assets/post-4.jpg')} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title">March 29,2020 | 3 Comments</p>
        <a className="card-text text-decoration-none text-dark" href=''>Maurissv suscipit in massa.</a><br />
        <a className='text-decoration-none' style={{color:'#cc6666'}} href="">Continue Reading</a>   
      </div>
    </div>
    </div>
    </div>
    <div className="text-center">
    <a href="" className='btn btn-light mb-4 mt-4 button' style={{hover:{color:'#cc6666'}}}>View More Articles</a>
    </div>
    </div>
  )
}

export default Blog