
import Link from 'next/link'
import {FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0' >
            <Link 
                href="/"
                className='text-white/90 no-underline hover:text-white'
                >
                Algo Hussle
            </Link>
            </h1>
            <div>
                <ul className='flex flex-row space-x-4'>
                    <li>
                        <Link href='https://www.youtube.com/channel/UCQ0Q0Qp7A9JyD0NNgG6gxkw'>
                            <a className='text-white/90 hover:text-white'>
                                <FaYoutube className='text-2xl' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://twitter.com/AlgoHussle'>
                            <a className='text-white/90 hover:text-white'>
                                <FaTwitter className='text-2xl' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/AlgoHussle'>
                            <a className='text-white/90 hover:text-white'>
                                <FaGithub className='text-2xl' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.algohussle.com'>
                            <a className='text-white/90 hover:text-white'>
                                <FaLaptop className='text-2xl' />
                            </a>
                        </Link>
                    </li>
        </div>
    </nav>
  )
}
