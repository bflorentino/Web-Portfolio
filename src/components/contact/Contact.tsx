import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Text from '../../language/Text';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const validateContactForm = (name: string, email:string, message:string) => {
  
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(name === "") return "Name is required";
    if(message === "") return "Message is required";
    if(!emailRegEx.test(email)) return "Invalid email";
    
    return true
}

const Contact = () => {

  const contact = useRef<HTMLFormElement | any >(null)

  useEffect(()=> {
    AOS.init()
    AOS.refresh()
})

  const handleSendButton = (e:any) => {
   
    e.preventDefault();
    
    const {from_name, from_email, message} = contact.current;
    const isValid = validateContactForm(from_name.value, from_email.value, message.value)

    if(isValid === true){

      emailjs.sendForm(process.env.REACT_APP_SERVICEID as string, 
                      process.env.REACT_APP_TEMPLATEID as string , 
                      contact.current, 
                      process.env.REACT_APP_PUBLICKEY as string)
      .then(res => {
        Swal.fire({
          title: "Email Send",
          icon: "success",
          "text": "Email was sent successfully",
          confirmButtonText: "Ok"
        })
        resetForm()
      })
    }else{
      Swal.fire({
        title: "Error sending email",
        icon: "error",
        "text": isValid,
        confirmButtonText: "Ok"
      })
    }
  }

  const resetForm = () => {
    const {from_name, from_email, message} = contact.current;
    from_email.value = "";
    from_name.value = "";
    message.value = ""
  }

  return (
    <>
    <div 
      className='flex flex-col items-center w-full pt-16' 
      id='idContact'
      data-aos="fade-up"
      data-aos-duration="3000"
     >
      <h1  className='text-button text-4xl font-ptsans'><Text tid='contactTitle' /></h1>
      <p className='text-white pb-4'>Email: bryanmontero81@gmail.com</p>
      <h1 className='bg-primary text-white font-ptsans text-lg text-justify w-4/5 minilaptop:w-2/5'>
      <Text tid='contactMessage' />
      </h1>
      <form ref={contact} action="" className='flex flex-col items-center bg-primary py-4 text-white w-4/5 minilaptop:w-2/5'>
        <input 
            type="text" 
            name='from_name' 
            placeholder='Your Name'
            className='border-2 border-button outline-none bg-none bg-primary w-full py-4 px-2 rounded-lg'  
          />
        <input 
          type="text" 
          name='from_email' 
          placeholder='Your email'
          className='border-2 border-button outline-none bg-transparent bg-primary w-full mt-5 py-4 px-2 rounded-lg' 
        />
        <textarea 
          placeholder='Type Your Message'
          name='message'
          className='border-2 border-button outline-none bg-none bg-primary w-full mt-5 py-4 px-2 rounded-lg resize-none'
          rows={5} 
        />
          <button className='bg-button text-[#000] text-lg font-ptsans px-6 py-2 rounded-lg mt-4' onClick={handleSendButton}>
          <Text tid='contactButton' />
          </button>
      </form>
    </div>
    </>
  )
}

export default Contact