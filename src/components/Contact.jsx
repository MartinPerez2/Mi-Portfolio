import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-r from-[#1F1D28] to-[#262837] flex justify-center items-center p-4'>
        <form method='POST' action="https://formsubmit.co/tinchoperez00@gmail.com" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>Envíe el formulario a continuación o envíeme un correo electrónico: tinchoperez@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-2xl' type="text" placeholder='Nombre' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-2xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-2xl' name="message" rows="10" placeholder='Mensaje'></textarea>
            <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center rounded-2xl'>Contactame</button>
        </form>
    </div>
  )
}

export default Contact