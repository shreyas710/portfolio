import React, {useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = ({darkMode}) => {

  let title = `<contact me>`

  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const [progress, setProgress] = useState('0%');
  const [buttonText, setButtonText] = useState('SEND MAIL');
  const [btnDis, setBtnDis] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setButtonText('SENDING . . .');
    setProgress('30%');
    
    setTimeout(() => {
      setButtonText('SENDING . . .');
    setProgress('70%');
      setTimeout(() => {
        setButtonText('SENT');
        setProgress('100%');
        setBtnDis(true);
      }, 500)
    }, 500)
    const templateId = 'template_qinvijn';
    const serviceId = 'service_wrmgpia';
    const publicKey = 'Fz0LWFTNEtewiSXWU';
    sendFeedback(templateId, serviceId, publicKey, {message_html: body, message_name: name, reply_to: emailID});
  }

  const sendFeedback = (templateId, serviceId, publicKey, variables) => {
    emailjs.send(
      serviceId,
      templateId,
      variables,
      publicKey
    ).then((res) => {
      console.log(res.text);
      setName('');
      setBody('');
      setEmailID('');
    }).catch((err) => {
      console.error(err.text);
      setName('');
      setBody('');
      setEmailID('');
    })
  }

  return (
    <div className='contact container' id='contact'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
      <div className={darkMode ? "contactContent" : "contactContent-light"}>
        <form className='mailMe' onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Your Name</label>
            <input style={{backgroundColor: darkMode ? '#333' : "#e0cdb4", color: darkMode ? "antiquewhite" : "#222"}} required value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Your Email</label>
            <input style={{backgroundColor: darkMode ? '#333' : "#e0cdb4", color: darkMode ? "antiquewhite" : "#222"}} required value={emailID} onChange={(e) => setEmailID(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea style={{backgroundColor: darkMode ? '#333' : "#e0cdb4", color: darkMode ? "antiquewhite" : "#222"}} required value={body} onChange={(e) => setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <button disabled={btnDis} type="submit" className="submitButton">
            <div className="button__progress" style={{width: progress, color: darkMode ? "antiquewhite" : "#222"}}></div>
            <div className="button__text" style={{color: darkMode ? "antiquewhite" : "#222"}}>{buttonText}</div>
          </button>
        </form>
      </div>
    </div>
  )
};

export default Contact;
