import Image from './Image'
import { Link } from 'react-router-dom'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='mt-36 pb-6 pt-6 pl-0 flex items-center justify-between container'>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <Image 
            src="logodog.png" alt="" 
            w={48} h={48}
            />
          <h1 className='text-2xl text-[#152751]'>
              J.T.J.Z <span className='text-[#147260] font-medium'> 
              Blog
            </span>
          </h1>
        </div>
        <p className='font-light'>
            Tecnodog, o seu parceiro ideal no mundo da tecnologia! Somos 
            apaixonados por inovação e dedicados a fornecer soluções 
            tecnológicas de ponta que impulsionam o sucesso dos nossos usuários.
        </p>
        <div className='font-light'>
          copyright &copy; Tecnodog 2025 - {year} | Todos os direitos reservados
        </div>
      </div>
      <div className='flex-1 flex justify-end gap-[100px] links'>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Links</span>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/politica-de-privacidade">Privacidade</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Tags</span>
          <Link to="/posts">Todos</Link>
          <Link to="/posts?cat=atividades">Atividades</Link>
          <Link to="/posts?cat=cursos">Cursos</Link>
          <Link to="/posts?cat=saude">Saúde</Link>
          <Link to="/posts?cat=tecnologia">Tecnologia</Link>
          <Link to="/posts?cat=gestao">Gestão</Link>
          <Link to="/posts?cat=news">Noticias</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Outros</span>
          <Link to='/posts?sort=trending'>Tendências</Link>
          <Link to='/posts?sort=popular'>Populares</Link>
          <Link to='https://www.facebook.com/tecnodog/' target="_blank">Facebook</Link>
          <Link to='https://www.facebook.com/tecnodog/' target="_blank">Instagram</Link>
        </div>
      </div>
    </div>
  )
}
