import Image from "next/image"

function Card(props) {
    // let techs = props.techs.map((tech)=>{
    //     return(
    //         <>
    //             <p className=' border border-sky-300 p-2'>{tech}</p>
    //         </>

    //     )
    // })
    return (
        <div className='font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col  border border-sky-300' >
            <div className="flex items-center justify-center">
                <Image className='p-4' src={props.image} width={600} height={300} alt='js logo' />
            </div>
            <div className='p-4 border-t flex flex-col gap-4 justify-between border-sky-300'>
                <div className='my-4'>
                    <h2>{props.title}</h2>
                    <p className='my-4'>{props.info}</p>
                    <a target="_blank" href={props.linkGHub} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 transition-all delay-100 border-sky-300 p-2'>Repositório GitHub</a>
                    <a target="_blank" href={props.linkPage} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 transition-all delay-100 border-sky-300 p-2'>Página do Projeto</a>
                </div>
                <div className='flex gap-4 flex-wrap '>
                    <p className=' border border-sky-300 p-2'>{props.tech1}</p>
                    <p className=' border border-sky-300 p-2'>{props.tech2}</p>
                    <p className=' border border-sky-300 p-2'>{props.tech3}</p>
                </div>
            </div>
        </div>
    )
}

export { Card }