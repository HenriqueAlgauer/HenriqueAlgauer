import Image from "next/image"
import jsLogo from '../images/js-logo.png'
import tsLogo from '../images/typescript-icon.png'
import tailWind from '../images/tailwind-logo.png'
import reactLogo from '../images/react-logo.svg'
import { Slide } from "@/components/slider/slider"
import { Aside } from "@/components/aside/aside"
import { Navbar } from "@/components/nav/navbar"
import { Card } from "@/components/card/card"

export default function Home() {
  const urlZap = "https://wa.me//5541991675316?text=Olá,%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações%20sobre%20seus%20serviços"
  return (
    <div className='h-full bg-zinc-700 container-2xl flex justify-between '>
      <div className='relative '>
        <Aside/>
      </div>
      <div className='pl-20 w-full '>
        <Navbar/>
        <main className='w-full'>
          <div className='grid grid-cols-3 '>
            <div className='border-r box-border py-8 border-sky-300 col-span-2 pl-16'>
              <h3 className='text-sky-300 text-7xl font-bold mb-8'>
                Dev <br />
                Front-end <br />
                <span className='text-zinc-100 font-light'>Junior</span>
              </h3>
              <a className='text-xl border-b border-sky-300 uppercase py-2 text-sky-300' href="#">Mais sobre mim</a>
            </div>
            <div className=''>
              <Slide className='' />
            </div>
          </div>

          <div className='bg-zinc-700 px-36 py-28 border-y border-sky-300'>
            <div className='mb-20'>
              <h2 className='mb-8 text-sky-300 font-bold text-6xl'>Portfólio</h2>
              <p className='text-xl text-sky-300'>Aqui estão alguns projetos que desenvolvi.
                <br />
                <br />
                Você pode observá-los na galeria e ser direcionado para ele.
                <br />
                Também tem o repositório no GitHub
              </p>
            </div>
            <div className='grid grid-cols-2 gap-12 justify-between'>
            <Card
              image={jsLogo}
              title='Projeto 1'
            />
            <Card
              image={jsLogo}
              title='Projeto 1'
            />
            <Card
              image={jsLogo}
              title='Projeto 1'
            />
            <Card
              image={jsLogo}
              title='Projeto 1'
            />
          
            </div>
          </div>

          <div className='bg-zinc-700 flex justify-center border-b border-sky-300'>
            <div className=' p-16 flex w-6/12 text-zinc-100 bg-sky-300 flex-col items-center gap-8 '>
              <h2 className='text-5xl font-bold '>Vamos conversar</h2>
              <p className='text-xl text-center'>Faça alguma pergunta ou só deixe <br /> uma mensagem pra dizer oi :)</p>
              <button className='font-bold border p-4'><a href={urlZap} target="_blank">WhatsApp</a></button>
            </div>
          </div>
        </main>
        <footer className='p-8 flex  justify-center items-end text-zinc-100'>
          <p>Copyright ©2023 Henrique Alagauer </p>
        </footer>
      </div>
    </div>
  )
}
