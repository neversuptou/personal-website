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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidEmail = (email: string) => {
    // Standart for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const ValidateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name) {
      newErrors.name = 'Заполните поле имя';
    }
    if (!formData.email) {
      newErrors.email = 'Заполните поле почта';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Неверный формат почты';
    }
    if (!formData.message) {
      newErrors.message = 'Заполните поле сообщение';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid: boolean = ValidateForm();
    if (isValid) {
      return (
        // Отправка формы
        console.log('Отправка формы', { name: formData.name, email: formData.email, message: formData.message })
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className='w-full h-full max-container'>
      <h1 className=" lg:ml-[520px] text-center bold-52">Contact <span className="text-gradient">me</span></h1>
      <div className='flex flex-row max-lg:flex-col justify-center max-lg:items-center'>
        <div className='col-4 flex flex-col justify-center items-center mt-[25px] max-lg:order-1 max-lg:mb-[100px]'>
          <div className="contact-square">
            <SvgMail width={50} height={50} />
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
        <div className='col-8 flex flex-col justify-center items-center h-[100%] lg:ml-[80px] order-0'>
          <div className="flex flex-col w-[100%]">
            <form className="form flex flex-col" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше Имя" className="w-[100%] h-[50px] regular-18 rounded-[10px] bg-gray-800 my-6 p-8"></input>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Ваша почта" className="w-[100%] h-[50px] regular-18 rounded-[10px] bg-gray-800 my-6 p-8"></input>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Ваше сообщение" className="w-[100%] h-[200px] regular-18 rounded-[10px] bg-gray-800 my-6 p-8 resize-none"></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" className="gradient-border py-4 px-8 rounded-[10px] my-8 align-middle">
                Отправить сообщение
              </button>
            </form>
          </div>
          <div className="flex flex-row justify-center items-center mx-10">
            <p className="regular-18 mx-4">
              © 2024 neversuptou
            </p>
            /
            <p className="regular-18 mx-4">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts