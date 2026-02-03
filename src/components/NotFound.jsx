import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

export default function NotFound() {
  return (
    <div className='w-full flex flex-col items-center mt-9'>
        <div>
            <Image src='/error404.png' alt='error404' w={300} h={300} />
        </div>
        <br />
        <div className='w-full text-center'>
            <p>Oops... Essa página não existe.</p>
            <p>Retorne para Página Inicial no nosso site clicando no botão abaixo</p>
        </div>
        <br />
        <Link to="/" className='bg-[#f10054] text-white p-4 rounded-lg'>Clique aqui</Link>
    </div>
  )
}
