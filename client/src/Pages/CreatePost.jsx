import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setgeneratingImg] = useState(false)
  const [Loading,setLoading ] = useState(false)

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w-[800px]'>Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
      </div>
    </section>
  )
}

export default CreatePost