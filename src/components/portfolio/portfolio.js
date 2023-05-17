import pokedex from '../../gifs/pokedex.gif'
import gitBrowser from '../../gifs/github.gif'
import xyz from '../../gifs/agencia-xyz.gif'
import adviceGenerator from '../../gifs/advice-generator.gif'
import { Card } from "../card/card"

function Portfolio() {
    return (
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
                <Card image={pokedex}
                    tech1='HTML'
                    tech2='CSS'
                    tech3='JAVASCRIPT'
                    linkPage='https://henriquealgauer.github.io/pokedex/'
                    linkGHub='https://github.com/HenriqueAlgauer/pokedex'
                    title='Pokedex'
                    info='Projeto de uma pokedex feita com JS vanilla '
                />
                <Card image={gitBrowser}
                    tech1='HTML'
                    tech2='CSS'
                    tech3='JAVASCRIPT'
                    linkPage='https://henriquealgauer.github.io/buscador-git/'
                    linkGHub='https://github.com/HenriqueAlgauer/buscador-git'
                    title='Buscador de usuário GitHub API'
                    info='Projeto que consome a API do GitHub e rotorna o informações do usuário, 10 repositórios com a quantidade de forks, stars, views e a linguagem e também os últimos 10 eventos do tipo CreateEvent e PushEvent.'
                />
                <Card image={xyz}
                    tech1='HTML'
                    tech2='CSS'
                    tech3='FLEX & GRID'
                    linkPage='https://henriquealgauer.github.io/agencia-xyz/'
                    linkGHub='https://github.com/HenriqueAlgauer/agencia-xyz'
                    title='Landing Page XYZ' 
                    info=''
                    />
                <Card image={adviceGenerator}
                    tech1='HTML'
                    tech2='CSS'
                    tech3='JAVASCRIPT'
                    linkPage='https://henriquealgauer.github.io/advice-generator/'
                    linkGHub='https://github.com/HenriqueAlgauer/advice-generator'
                    title='Advice Generator API'
                    info='Projeto que consome uma API que gera conselhos aleatórios, ela retorna o conselho com o ID referente a ele.'
                />
            </div>
        </div>
    )
}

export { Portfolio }