import React, { useRef, useState } from 'react'
import contactimg1 from '../Assets/contact/contactimg1.jpeg'
import contactimg2 from '../Assets/contact/contactimg2.jpeg'
import { TextField } from '@mui/material'
import emailjs from '@emailjs/browser';
import { IoIosArrowDown } from "react-icons/io";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import { toast } from 'react-toastify'

export const Contact = () => {
  return (
   <div className='w-full min-h-100vh flex flex-col'>
      
          <Contactsect/>
          <Contactmsg/>
          <FAQSection/>
       </div>
  )
}

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#91d19f',
    },
    '&:hover fieldset': {
      borderColor: '#91d19f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1e8835',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#1e8835',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#91d19f',
  },
  '& .MuiOutlinedInput-input': {
    color: '#000000',
    fontSize: { xs: '14px', sm: '14px', md: '16px' }, // Responsive font size
              height: { xs: '12px', sm:'15px' },  // Responsive height

  },
};





 export const Contactsect = () => {
    return (
        <div className='w-full min-h-100vh relative flex flex-col justify-center items-center pt-[70px] pb-[30px] px-[70px] '>
           
                  <div  className='w-full flex gap-[60px] items-center '>
                <div className='w-[50%] flex justify-end'>
                  <img src={contactimg1} className='w-[75%] rounded-[10px] '/>              
                   </div>
                <div className='w-[50%] flex flex-col gap-[10px]'>
                <p className='text-[24px] text-[#087620] font-[500]'>Contact Us</p>
                <p className='w-full text-[18px]  text-[black] leading-[1.7] text-justify'>Address : 3524, Parkway Street, Los Angeles, USA</p>
                <p className='w-full text-[18px]  text-[black] leading-[1.7] text-justify'>Email : plantsparksupport@gmail.com</p>
                <p className='w-full text-[18px]  text-[black] leading-[1.7] text-justify'>Phone : 9678678974</p>
                <p className='w-full text-[18px]  text-[black] leading-[1.7] text-justify'>Open hours: Mon - Sat: 8 AM to 9 PM</p>
                  
                </div>
                </div>
                    
            </div>
    )
  }

  const forminit = {
    username: '',
    email: '',
    subject: '',
    message: ''
  };
  

  export const Contactmsg = () => {
    const form = useRef();
    const [formdata, setformdata] = useState(forminit);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    emailjs
      .sendForm('service_k45fb3v', 'template_mwpx9fa', form.current, {
        publicKey: 'Vz1-3jeJU3-lIUAIY',
      })
      .then(
        () => {
          toast.success('Message sent', { className: "w-1/5" });
          setformdata(forminit);
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed.. ${error.text || 'Something went wrong'}`, { className: "w-1/5" });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

    return (
        <div className='w-full min-h-100vh relative flex flex-col justify-center items-center pt-[70px] pb-[30px] px-[70px] '>
           
                  <div  className='w-full flex justify-center gap-[50px] items-center '>
                
                <div className='w-[50%] flex flex-col items-center  border-[1px] p-[20px] rounded-[10px] border-[#d8d6d6] shadow-[0_2px_8px_#dfdfdf]'>
                <p className='text-[24px] text-[#087620] pb-[15px]'>GET IN TOUCH </p>
                  <form ref={form} onSubmit={sendEmail}  className='w-[75%] flex flex-col items-center gap-[20px] '>
                <div className='w-full flex gap-[15px]'>
                  <TextField id="username" label="Name" variant="outlined" type='text' name='username' value={formdata.username} onChange={handleChange} sx={textFieldStyles} className='w-full'
                    required/>
                   <TextField id="email" label="E-mail" variant="outlined" type="email"  name='email' value={formdata.email} onChange={handleChange} sx={textFieldStyles} className='w-full'
                   required/></div>
                   <TextField id="subject" label="Subject" variant="outlined" type='text' name='subject' value={formdata.subject} onChange={handleChange} sx={textFieldStyles} className='w-full'
                   required/> 
                   <TextField id="message" label="Message" variant="outlined" type='text' name='message' value={formdata.message} onChange={handleChange} sx={textFieldStyles} className='w-full'
                   required multiline/> 
                    <button type='submit' disabled={isSubmitting} className='px-[12px] py-[9px]  [@media(min-width:500px)]:text-[17px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
                    {isSubmitting ? 'SEND ME...' : 'SEND ME'}         
   </button>   
                   </form>              
                </div>
                <div className='w-[50%] flex justify-start'>
                  <img src={contactimg2} className='w-[87%] rounded-[10px] '/>              
                   </div>
                </div>
                    
            </div>
    )
  }


  const faqs = [,
    { id:1,
      question: "What are your customer support hours?",
      answer: "Our support team is available Mon - Sat: 8 AM to 9 PM (EST).",
    },
    { id:2,
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within the USA. We are working on expanding our delivery locations.",
    },
    {  id:3,
      question: "Can I modify or cancel my order?",
      answer: "Orders can only be modified or canceled within 24 hours of placing them. Contact us immediately if you need changes.",
    },
    {  id:4,
      question: "What should I do if my plant arrives damaged?",
      answer:
        "We ensure careful packaging, but if your plant arrives damaged, please send a photo to support@yourplantstore.com within 48 hours for a replacement.",
    },
    
  ];
  
  export const FAQSection = () => {
    const [accord,setaccord]=useState(false)
    const handle=(id)=>{
        setaccord((previd) => (previd === id ? null : id));
       }
    return (
        <div className='w-full  min-h-100vh flex flex-col justify-center items-center gap-[30px] py-[50px]'>
        <p className='text-[24px] text-[#087620]'>Frequently Asked Questions (FAQ's)</p>

         
        <Accordion allowZeroExpanded className='w-[70%] flex flex-col justify-center item-center' >
 {faqs.map((item) => (
   <AccordionItem key={item.id} className="w-full flex flex-col gap-3 border-[#16161623] border-[1px] p-[5px] " allowZeroExpanded>
     <AccordionItemHeading>
       <AccordionItemButton>
         <p className='text-[17px] flex justify-between items-center px-[15px] py-[8px] text-[#000000d3] hover:text-[#087620] easy-in-out duration-300' onClick={()=>handle(item.id)}>{item.question} {item.id!==accord ? <IoIosArrowDown/>: <IoIosArrowDown className='rotate-180'/>}</p></AccordionItemButton>
     </AccordionItemHeading>
     
     <AccordionItemPanel>
       <p className='text-[17px] px-[15px] py-[15px] border-t-[1px] border-[#cccccc] leading-[1.5]'>{item.answer}</p>
     </AccordionItemPanel>
   </AccordionItem>
 ))}
</Accordion>
</div>
    )
  }