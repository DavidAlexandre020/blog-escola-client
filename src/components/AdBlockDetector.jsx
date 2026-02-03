import { checkAdBlock } from "adblock-checker";
import { useState } from "react";

const AdBlockChecker = async() => {
    const AdBlockCheck = await checkAdBlock()
    return AdBlockCheck
}

const AdBlockDetector = () => {
    const [ detect, setDetect ] = useState()

    const detected = AdBlockChecker()
    detected.then((PromiseResult) => {
            setDetect(PromiseResult)
    })

  return (
    <div>
      {detect ? (
        <div className='fixed w-full h-full flex justify-center items-center bg-[#000000f7] z-[2000]'>
          <div className='bg-white w-96 flex flex-col items-center gap-6 p-6 rounded-xl'>
            <div className='w-28 h-28 relative'>
              <img className='w-full h-full object-cover' src="/12689753.png" alt="Adblock detectado!" />
            </div>
            <h1 className='text-2xl text-[#DC3545] font-semibold'>Adblock detectado!</h1>
            <p className='text-start'>
              Por favor desabilite o adblock. Devido ao crescente número 
              de usuários usando adblock tem se tornado cada vez mais 
              difícil manter o site online. Sua colaboração faz toda a 
              diferença para que possamos continuar aqui. Com seu apoio, 
              podemos seguir crescendo e melhorando sempre. Agradecemos 
              por fazer parte da nossa comunidade!!
            </p>
          </div>
        </div>
      )  : ""}
    </div>
  );
};

export default AdBlockDetector;
