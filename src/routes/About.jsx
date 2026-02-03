import React from 'react'
import Image from '../components/Image'
import Helmet from "../components/helmet";
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <div className='w-full flex flex-col items-center'>
      <Helmet
         title="Sobre-nós"
         largeTwitterCard={true}
         addPostfixTitle={true}
      />
        <div className="w-[200px] h-[200px] relative">
            <Image className='w-full h-full object-cover' src='/feature.png' alt='Dog tecno engineer' />
        </div>
        <div className='text-center flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>Sobre Nós - Tecnodog</h1>
            <p className='text-justify text-sm md:text-lg'>
                Bem-vindo à Tecnodog, o seu parceiro ideal no mundo da tecnologia! 
                Somos apaixonados por inovação e dedicados a fornecer soluções 
                tecnológicas de ponta que impulsionam o sucesso dos nossos usuários.
            </p>
        </div>
        <div className='text-center flex flex-col gap-5 mt-8'>
            <h1 className='text-2xl font-bold'>Nossa Missão</h1>
            <p className='text-justify text-sm md:text-lg'>
              Na Tecnodog, a nossa missão é simples: transformar ideias em 
              realidade através da tecnologia. Acreditamos que a tecnologia tem 
              o poder de mudar o mundo, e estamos empenhados em usar a nossa 
              experiência e conhecimento para criar soluções que façam a diferença.
            </p>
        </div>
        <div className='text-center flex flex-col gap-5 mt-8'>
            <h1 className='text-2xl font-bold'>Nossa História</h1>
            <p className='text-justify text-sm md:text-lg'>
              Fundada em 2025, a Tecnodog nasceu da visão 
              de <span className='font-semibold'> Maurício Mbala </span> de criar uma empresa que 
              combinasse a excelência técnica com um compromisso inabalável com 
              a satisfação do usuário. Ao longo dos anos, temos crescido e 
              evoluído, adaptando-nos às mudanças do mercado e às necessidades 
              dos nossos usuários.
            </p>
        </div>
        <div className='text-center flex flex-col gap-5 mt-8'>
            <h1 className='text-2xl font-bold'>Nossos Valores</h1>
            <p className='text-start md:text-justify text-sm md:text-lg flex flex-col gap-6 md:gap-3'>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3'>
                <span className='font-semibold'>Inovação:</span>
                <span>
                  Buscamos constantemente novas ideias e tecnologias para oferecer
                  as melhores soluções aos nossos usuários.
                  {/* className='text-xs md:text-sm lg:text-lg */}
                </span>
              </span>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3'>
                <span className='font-semibold'>Qualidade:</span>
                <span>
                  Comprometemos-nos com a excelência em tudo o que fazemos, desde
                  o desenvolvimento de software até o suporte ao usuário.
                </span>
              </span>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3'>
                <span className='font-semibold'>Integridade:</span>
                <span>
                  Agimos com honestidade e transparência em todas as nossas interações.
                </span>
              </span>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3'>
                <span className='font-semibold'>Colaboração:</span>
                <span>
                  Acreditamos no poder do trabalho em equipe e na importância 
                  de construir relacionamentos fortes com os nossos usuários e parceiros.
                </span>
              </span>
              <span className='flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3'>
                <span className='font-semibold'>Foco no Usuário:</span>
                <span>
                  A satisfação do usuário é a nossa prioridade número um.
                </span>
              </span>
            </p>
        </div>
    </div>
    <Footer />
    </div>
  )
}
