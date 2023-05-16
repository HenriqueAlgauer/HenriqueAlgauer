import Image from "next/image"
import logo from '../../images/ha-logo.png'


const Navbar = () => {
    return (
        <nav className='w-full h-20  bg-zinc-700 flex justify-between items-center border-b border-sky-300'>
            <div className='cursor-pointer flex items-center gap-4 pl-16'>
                <Image src={logo} width={40} height={40} alt="logo" />
                <h2 className='text-xl text-sky-300 font-bold'>Henrique Algauer</h2>
            </div>
            <button className=' border-l border-sky-300 text-zinc-100 px-12 h-full bg-sky-300'>CONTATO</button>
        </nav>
    )
}

export {Navbar}