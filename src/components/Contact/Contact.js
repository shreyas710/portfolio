import React, {useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

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
      <div className="contactContent">
        <form className='mailMe' onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Your Name</label>
            <input placeholder='John Doe' required value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Your Email</label>
            <input required value={emailID} onChange={(e) => setEmailID(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <button disabled={btnDis} type="submit" className="submitButton">
            <div className="button__progress" style={{width: progress}}></div>
            <div className="button__text">{buttonText}</div>
          </button>
        </form>
      </div>
    </div>
  )
};

export default Contact;
