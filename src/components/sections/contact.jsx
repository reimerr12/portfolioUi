import { useState } from 'react';
import {RevealOnScroll} from '../RevealOnScroll';
import emailjs from 'emailjs-com'

export const Contact = () =>{
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })

    const serviceId = "service_c9tf7w6";
    const templateId = "template_o1rrrrf";
    const PUBLIC_KEY = "q8d4-BHSiMkqhiBwp";

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm(serviceId,templateId,e.target,PUBLIC_KEY).then(()=>{
            alert("message send");
            setFormData({name:"",email:"",message:""});
        }).catch(()=>{
            alert("oops something went wrong,please try again later");
        })
    }
    return(
        <section id="id" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150 mx-auto">

                    <h2 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right capitalize p-4 bg-clip-text text-transparent text-center'>Get in Touch</h2>

                    <form action="" className='space-y-2'  onSubmit={handleSubmit}>

                        <div className="relative">
                            <input type="text" id='name' name='name' required 
                            value={formData.name}
                            placeholder='Name...'
                            onChange={(e)=>setFormData({...formData, name:e.target.value})}
                            className='w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-blue-500/5'/>
                        </div>

                        <div className="relative">
                            <input type="email" id='email' name='email' required
                            value={formData.email}
                            placeholder='example@gmail.com'
                            onChange={(e)=>setFormData({...formData, email:e.target.value})}
                            className='w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-blue-500/5'/>
                        </div>

                        <div className="relative">
                            <textarea type="message" id='message' name='message' required value={formData.message}
                            placeholder='Let me know'
                            onChange={(e)=>setFormData({...formData, message:e.target.value})}
                            rows={5} className='w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-blue-500/5'/>
                        </div>

                        <button type='submit' className='w-full bg-cyan-500 text-white py-3 px-6 rounded-xl font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-400'>Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}