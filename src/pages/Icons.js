import React from 'react'
import { BsTruck, BsArrowReturnLeft, BsHeadphones } from 'react-icons/bs';

const Icons = () => {
  return (
    
         <div className="icon-boxes-container bg-transparent mt-3">  
        <div className="container-fluid">
            <div className="row justify-content-center d-flex">
                
                    <div className="col-sm-6 col-lg-4 d-flex">
                        
                            <div className="icon-box icon-box-side">
                                <div className="icon-box icon-box-side">
                                    <div className="icon-box-icon">
                                <span> <BsTruck/> </span>
                                </div>
                                 <div className="icon-box-content">
                                    <h3 className='icon-box-title'>Payment & Dilivery</h3>
                                <p>Free shipping for orders over $50</p>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="icon-box icon-box-side">
                                <div className="icon-box-icon">
                                <span><BsArrowReturnLeft/></span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className='icon-box-title'>Return & Refund</h3>
                                    <p>Free 100% money back gaurantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="icon-box icon-box-side">
                                <div className="icon-box-icon">
                                <span><BsHeadphones/></span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className='icon-box-title'>Quality support</h3>
                                    <p>Always online feedback 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
  )
}

export default Icons