"use client"
import Link from "next/link";
import Image from "next/image";
import SvgMail from "../../components/icons/mail";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Отправка формы
    console.log('Отправка формы', { name: formData.name, email: formData.email, message: formData.message });
  };
  const handleChange = (e: React.FormEvent<HTMLFormElement| HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='w-full h-full max-container'>
      <div className='flex flex-row justify-center '>
        <div className='col-4 flex flex-col justify-center items-center mt-[63px] '>
          <div className="contact-square">
            <SvgMail width={50} height={50}/>
            <div className="py-4 text-center">
              <span>Email</span>
              <p>danilasereda2@yandex.ru</p>
            </div>
            <Link href={"mailto:danilasereda2@yandex.ru"} className="text-gradient bot">
              Отправить письмо
            </Link>
          </div>
          <div className="contact-square my-8">
            <Image src="/tg.svg" alt="mail" width={50} height={50} />
            <div className="py-4 text-center">
              <span>Telegram</span>
              <p>@nstu666</p>
            </div>
            <Link href={"https://t.me/nstu666"} className="text-gradient bot">
              Отправить сообщение
            </Link>
          </div>
          <div className="contact-square">
            <Image src="/gh-logo.svg" alt="github" width={40} height={40} />
            <div className="py-4 text-center">
              <span>Github</span>
              <p>neversuptou</p>
            </div>
            <Link href={"https://github.com/neversuptou"} className="text-gradient bot">
              Посмотреть проекты
            </Link>
          </div>
        </div>
        <div className='col-8 flex flex-col justify-center items-center h-[100%] ml-[80px]'>
          <h1 className="bold-52">Contact <span className="text-gradient">me</span></h1>
          <div className="flex flex-col w-[100%]">
            <form className="form flex flex-col" onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} placeholder="Ваше Имя" className="w-[100%] h-[50px] regular-18 rounded-[10px] bg-gray-800 mb-4 p-8"></input>
              <input type="text" name="email" value={formData.email} placeholder="Ваша почта" className="w-[100%] h-[50px] regular-18 rounded-[10px] bg-gray-800 my-4 p-8"></input>
              <input type="text" name="message" value={formData.message} placeholder="Ваше сообщение" className="w-[100%] h-[200px] regular-18 rounded-[10px] bg-gray-800 my-4 p-8 resize-none"></input>
              <button type="submit" className="gradient-border py-4 px-8 rounded-[10px] my-4 align-middle">
                Отправить сообщение
              </button>
            </form>
          </div>
          <div className="flex flex-row justify-center items-center mx-10 pt-[135px]">
            <p className="regular-18 mx-4">
            © 2024 neversuptou
          </p>
          /
            <p className="regular-18  mx-4">
              All rights reserved
            </p>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts