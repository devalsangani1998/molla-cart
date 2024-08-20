import React, { useEffect } from 'react'
import "./contact.css"
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiFullscreen, BiTime } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";


const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="page-header page-header-big">
          <img src={require('./../components/assets/contact-header-bg.jpg')} style={{ width: '100%', padding:"50px 0 50px 0" }} alt="" />
          <h1 className="text-white">Contact us</h1>
        </div>
      </div>

      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h2 className='title mb-1'>Contact Information</h2>
              <p className="mb-3">
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
              </p>
              <div className="row mt-4">
                <div className="col-sm-7">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className='contact-list'>
                      <li className='d-flex gap-2 align-items-center'>
                        <CiLocationOn style={{ fontSize: "35px" }} />
                        70 Washington Square South New York, NY 10012, United States
                      </li>
                      <li className='d-flex gap-2 align-items-center'><IoIosCall style={{ fontSize: "20px" }} /> <a href="tel:#">+92 423 567</a></li>
                      <li className='d-flex gap-2 align-items-center'><AiOutlineMail style={{ fontSize: "20px" }} /><a href="mailto:#">info@molla.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className='contact-list'>
                      <li className='d-flex gap-2 align-items-center'><BiTime style={{ fontSize: "20px" }} />
                        Monday-Saturday<br />
                        11am-7pm ET
                      </li>
                      <li className='d-flex gap-2 align-items-center'><VscCalendar style={{ fontSize: "20px" }} />
                        Sunday<br />
                        11am-6pm ET
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <h2 className='title mb-1'>Got Any Questions?</h2>
              <p className='mb-2'>Use the form below to get in touch with the sales team</p>
              <form action="#" className='contact-form mb-3 mt-4'>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname" className='sr-only'>Name</label>
                    <input type="text" className='form-control form-1' id='cname' placeholder='Name *' required />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cemail" className='sr-only'>Email</label>
                    <input type="email" className='form-control form-1' id='cemail' placeholder='Email *' required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cphone" className='sr-only'>Phone</label>
                    <input type="tel" className='form-control form-1' id='cphone' placeholder='phone' />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="csubject" className='sr-only'>Subject</label>
                    <input type="text" className='form-control form-1' id='csubject' placeholder='Subject' />
                  </div>
                </div>
                <label htmlFor="cmessage" className='sr-only'>Message</label>
                <textarea className='form-control form-1' cols="30" rows="4" id='cmessage' required placeholder='Message *'></textarea>
                <button type='submit' className='btn btn-outline-primary-2 btn-minwidth-sm' >
                  <span>SUBMIT</span>
                  <BsArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774452.826502191!2d-75.16241919097068!3d40.691452755346624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1687778176635!5m2!1sen!2sin"
 
  style={{ border: 0 , width:"100%", height:"400px"}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>


    </>
  )
}

export default Contact