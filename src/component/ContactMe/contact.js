import  "./contact.css";
import {useRef} from "react";

const Contact = () => {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
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