export default function Loader() {
  return (
    <div className='flex flex-col items-center mt-6'>
        <div className='relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
            <img 
                className='w-full h-full object-cover'
                src="/dog-loader.gif" 
                alt="loading"
            />
        </div>
        <div className='text-xl md:text-3xl'>Carregando...</div>
    </div>
  )
}
