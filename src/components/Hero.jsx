import { logo } from '../assets'
import '../App.css'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src = { logo } className='w-1/4 h-auto object-contain' alt='summarizer_logo'/>

        <button type='button' className='black_btn' onClick={()=>{ window.open("https://github.com/KhGunindro/summarizer")}}>
            Github
        </button>
        </nav>

        <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
            Summarize your Articles with <br className='max-md:hidden'/>
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Escape the confusion of lengthy articles with our Summarizer powered by the GPT-4 API. Effortlessly distill complex content into concise summaries.Simplicity at its best.
        </h2>
    </header>
  )
}

export default Hero