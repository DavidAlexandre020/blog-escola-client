import React from 'react'
import Helmet from "../components/helmet";
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <div className='flex flex-col gap-6 mt-12 text-justify'>
      <Helmet
         title="Contacto"
         largeTwitterCard={true}
         addPostfixTitle={true}
      />
        <h1 className='text-2xl font-bold'>Fale connosco</h1>
        <h2 className='text-xl font-bold'>Contacte-nos</h2>
        <div className='flex flex-col gap-6 text-justify text-sm md:text-lg'>
        <p>
            Fale com a gente através de <a className='text-[#0000ff] font-bold underline' href="mailto:tecnodog.privacy@gmail.com">tecnodog.privacy@gmail.com</a> Seus dados 
            permanecem seguros e serão usados somente para te responder, caso 
            seja necessário.
        </p>
        <p>
            O <strong>Tecnodog</strong> não presta consultoria por e-mail. Mensagens encaminhadas 
            para a redação podem servir de base para reportagens publicadas no site.
        </p>
        <p>Você pode entrar em contacto connosco para qualquer um dos seguintes:</p>
        <div className='flex flex-col text-justify gap-6'>
            <p><span className='font-semibold'>Feedback do site:</span> Se você tiver alguma ideia, opinião ou comentário sobre nosso site, seu design ou funcionalidade, adoraríamos ouvi-los. Seu feedback nos ajuda a criar uma melhor experiência do usuário.</p>
            <p><span className='font-semibold'>Dúvidas sobre conteúdo:</span> Tem alguma dúvida ou preocupação sobre nosso conteúdo? Se você está procurando esclarecimentos ou precisa de mais detalhes sobre um tópico específico, sinta-seà vontade para perguntar. Estamos aqui para fornecer as informações que você precisa.</p>
            <p><span className='font-semibold'>Correções ou atualizações:</span> Se você encontrar alguma informação em nossas postagens que pareça incorreta, desatualizada ou ausente, avise-nos. Nós nos esforçamos para fornecer conteúdo preciso e atualizado, e suas ideias nos ajudam a garantir que estamos entregando o melhor.</p>
            <p><span className='font-semibold'>Sugestões de design:</span> Você tem ideias sobre como podemos melhorar a aparência ou a usabilidade do nosso site? Seja mudando o tema, as cores ou o layout, gostaríamos de saber sua opinião.</p>
            <p><span className='font-semibold'>Sugestões de melhoria: </span>Estamos sempre procurando maneiras de melhorar o <strong>Tecnodog</strong> . Se você tiver alguma sugestão para aprimorar nosso site, seja em termos de conteúdo, ferramentas ou recursos, não hesite em compartilhar.</p>
        </div>
        <p className='font-bold'>Não hesite em nos contactar:</p>
        <p><strong>E-mail: </strong> <a className='text-[#0000ff] underline' href="mailto:tecnodog.privacy@gmail.com"> tecnodog.privacy@gmail.com</a></p>
        </div>
    </div>
    <Footer />
    </div>
  )
}
