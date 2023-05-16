import Image from "next/image"

function Card(props) {    
    return (
        <div className="font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col border border-sky-300 ">
            <Image className='p-4' src={props.image} width={300} height={300} alt='js logo' />
            <div className='p-4 border-t border-sky-300'>
                <h2>{props.title}</h2>
                <p className='my-4'>{props.info}</p>
                <div className='flex gap-4 '>
                    <p className=' border border-sky-300 p-2'>React</p>
                    <p className=' border border-sky-300 p-2'>TypeScript</p>
                    <p className=' border border-sky-300 p-2'>Tailwind</p>
                </div>
            </div>
        </div>
    )
}

export {Card}