import  "./contact.css";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('dsds',formRef.current)
        emailjs.sendForm('service_079gk8f', 'template_vozg7z6', formRef.current, 'J51UuCRIWjIxSQT5P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    } 
    return ( 
    	<div className ="container" >
        	<form role="form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name" name="user_name"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Sujet" name="user_subject"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" name="user_email"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="5" placeholder="Message" name="message"/>
                </div>
                <div className="form-group">
                    <button className="submit">Submit</button>
                </div>   
            </form>  
        </div>
    )
}
export default Contact