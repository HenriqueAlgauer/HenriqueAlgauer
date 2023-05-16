// import { Nav } from "@/components/nav"
// import { Footer } from "@/components/footer"
import Image from "next/image"
import jsLogo from '../images/js-logo.png'
import tsLogo from '../images/ts-logo.png'
import tailWind from '../images/tailwind-logo.png'
import logo from '../images/ha-logo.png'
import reactLogo from '../images/react-logo.svg'
import { Slide } from "@/components/slider/slider"

export default function Home() {
  const urlZap = "https://wa.me//5541991675316?text=Olá,%20vim%20pelo%20seu%20site%20e%20queria%20mais%20informações%20sobre%20seus%20serviços"
  return (
    <div className='h-full bg-zinc-700 container-2xl flex justify-between'>
      <div className='relative '>
        <aside className='h-full bg-zinc-700 fixed flex flex-col justify-between p-2 border-r border-sky-300'>
          <button>Menu</button>
          <div className='flex flex-col gap-4'>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </aside>
      </div>
      <div className='pl-20 w-full '>
        <div className="relative">
        <nav className='w-full h-20 pr-20 fixed bg-zinc-700 flex justify-between items-center border-b border-sky-300'>
          <div className='flex items-center '>
            <Image src={logo} width={120} height={10} alt="logo"/>
            <h2 className='text-xl text-sky-300'>Henrique Algauer</h2>
          </div>
          <button className=' border-l border-sky-300 text-zinc-100 px-12 h-full bg-sky-300'>CONTATO</button>
        </nav>
        </div>
        <main className='w-full mt-20'>

          <div className='grid grid-cols-3 bg-zinc-700 '>
            <div className='py-8 border-r border-sky-300 col-span-2 pl-16'>
              <h3 className='text-sky-300 text-7xl font-bold mb-8'>
                Dev <br />
                Front-end <br />
                <span className='text-zinc-100 font-light'>Junior</span>
              </h3>
              <a className='text-xl border-b border-sky-300 uppercase py-2 text-sky-300' href="#">Mais sobre mim</a>
            </div>
            <div className='w-full bg-red-200' >
              <Slide className='text-center'/>
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
              <div className="font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col border border-sky-300 ">
                <Image className='p-4' src={jsLogo} width={300} height={300} alt='js logo' />
                <div className='p-4 border-t border-sky-300'>
                  <h2>Title</h2>
                  <p className='my-4'>Descrição Projeto</p>
                  <div className='flex gap-4 '>
                    <p className=' border border-sky-300 p-2'>React</p>
                    <p className=' border border-sky-300 p-2'>TypeScript</p>
                    <p className=' border border-sky-300 p-2'>Tailwind</p>
                  </div>
                </div>
              </div>
              <div className="font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col border border-sky-300 -mt-20 ">
                <Image className='p-4' src={tsLogo} width={300} height={300} alt='typeScript logo' />
                <div className='p-4 border-t border-sky-300'>
                  <h2>Title</h2>
                  <p className='my-4'>Descrição Projeto</p>
                  <div className='flex gap-4 '>
                    <p className=' border border-sky-300 p-2'>React</p>
                    <p className=' border border-sky-300 p-2'>TypeScript</p>
                    <p className=' border border-sky-300 p-2'>Tailwind</p>
                  </div>
                </div>
              </div>
              <div className="font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col border border-sky-300 ">
                <Image className='p-4' src={tailWind} width={300} height={300} alt='tailwind logo' />
                <div className='p-4 border-t border-sky-300'>
                  <h2>Title</h2>
                  <p className='my-4'>Descrição Projeto</p>
                  <div className='flex gap-4 '>
                    <p className=' border border-sky-300 p-2'>React</p>
                    <p className=' border border-sky-300 p-2'>TypeScript</p>
                    <p className=' border border-sky-300 p-2'>Tailwind</p>
                  </div>
                </div>
              </div>
              <div className="font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col border border-sky-300 -mt-20">
                <Image className='p-4' src={reactLogo} width={300} height={300} alt='react logo' />
                <div className='p-4 border-t border-sky-300'>
                  <h2>Title</h2>
                  <p className='my-4'>Descrição Projeto</p>
                  <div className='flex gap-4 '>
                    <p className=' border border-sky-300 p-2'>React</p>
                    <p className=' border border-sky-300 p-2'>TypeScript</p>
                    <p className=' border border-sky-300 p-2'>Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-zinc-700 flex justify-center border-b border-sky-300'>
            <div className=' p-16 flex w-6/12 text-zinc-100 bg-sky-300 flex-col items-center gap-8 '>
              <h2 className='text-5xl font-bold '>Vamos conversar</h2>
              <p className='text-xl text-center'>Faça alguma pergunta ou só deixe <br/> uma mensagem pra dizer oi :)</p>
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
