import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

export default function Write() {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video w-[400px] h-[400px]" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate()
  
  const { getToken } = useAuth()
  
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken()
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
    },
    onSuccess: (res) => {
      toast.success("Post has been created")
      navigate(`/${res.data.slug}`)
    }
  })

  if(!isLoaded) {
    return <div className=''>Loading...</div>
  }
  if(isLoaded && !isSignedIn) {
    return <div className=''>You should login!</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      keywords: formData.get("keywords"),
      content: value,
    }

    // console.log(data)
    mutation.mutate(data)
  }

  const module = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-cl font-light'>Criar uma nova postagem</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6'>
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add imagem de capa
          </button>
        </Upload>
        <input 
          className='text-4xl font-semibold bg-transparent outline-none' 
          type="text" 
          placeholder="Título do post"
          name="title"
        />
        <div className='flex items-center gap-2'>
          <label htmlFor="" className='text-sm '>Escolha uma categoria:</label>
          <select 
            name="category" 
            id="" 
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="">Selecione a categoria</option>
            <option value="atividades">Atividades</option>
            <option value="cursos">Cursos</option>
            <option value="saude">Saúde</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="gestao">Gestão</option>
            <option value="news">Noticias</option>
          </select>
        </div>
        <textarea 
          className='p-4 rounded-xl bg-white shadow-md' 
          name="desc" 
          placeholder="Uma breve descrição" 
        />
        <p>As Palavras-chaves são separadas por virgula ( , )</p>
        <textarea 
          className='p-4 rounded-xl bg-white shadow-md' 
          name="keywords" 
          placeholder="Palavras-chave - exemplo1, exemplo2, exemplo3..." 
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            modules={module}
            theme="snow" 
            className='flex-1 rounded-xl bg-white shadow-md'
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)} 
          className='bg-[#165347] text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-[#16534783] disabled:cursor-not-allowed'
        >
          {mutation.isPending ? "Loading..." : "Publicar"}
        </button>
      </form>
    </div>
  )
}
