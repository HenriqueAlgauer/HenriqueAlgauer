// import { Nav } from "@/components/nav"
// import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className='h-screen container-2xl bg-zinc-600 flex'>
      <div>
        <aside className='h-screen w-20 bg-zinc-100'>linked in</aside>
      </div>
      <div className="w-full relative">
        <nav className='w-full h-20 bg-zinc-300 flex fixed gap-12 justify-between px-10 items-center'>
          <p className=''>Henrique algauer</p>
          <button>Contact</button>
        </nav>
        <main className='h-screen bg-zinc-400'>

          <div className='flex flex-row bg-red-400 px-12 py-16
          '>
            <div >
              <h3>Visual & Interaction Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptates architecto distinctio veritatis error soluta commodi quo voluptatem perspiciatis, aut ad beatae aliquam necessitatibus nostrum ipsam velit expedita nemo rerum!</p>
              <a href="#">More about me</a>
            </div>
            <div className='w-4/12 h-full'>
              hello
            </div>
          </div>

          <div className='bg-blue-300 px-12 py-16'>
            <div className="bg-green-400 py-20">
              <h2>Portfolio</h2>
              <p>Here are some case studies including the design process behind them.
                <br />
                Or you can explore a more visual gallery with a variety of different projects on the link below
              </p>

            </div>
            <div className='flex gap-20 '>
              
              <div className="">
                <div className="font-bold w-20 h-20 bg-red-600 ">image</div>
                <div className="font-bold w-20 h-20 bg-red-600">image</div>
              </div>

              <div className="-my-12">
                <div className="font-bold w-20 h-20 bg-red-600 my-">image</div>
                <div className="font-bold w-20 h-20 bg-red-600">image</div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
