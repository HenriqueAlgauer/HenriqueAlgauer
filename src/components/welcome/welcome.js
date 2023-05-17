import { Slide } from "../slider/slider"

function Welcome(){
    return(
        <div className='grid grid-cols-3 '>
            <div className='border-r box-border py-8 border-sky-300 col-span-2 pl-16'>
              <h3 className='text-sky-300 text-7xl font-bold mb-8'>
                Dev <br />
                Front-end <br />
                <span className='text-zinc-100 font-light'>Junior</span>
              </h3>
              <a className='text-xl border-b border-sky-300 uppercase py-2 text-sky-300' href="#">Mais sobre mim</a>
            </div>
            <Slide/>
          </div>
    )
}

export {Welcome}