import useState from 'react'
import Head from 'next/head'
import Image from 'next/image'
import headerLady from '../public/images/girlheader.jpg'
import glasses from '../public/images/glasses.jpg'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {BiLockAlt} from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  let clickVal;
  return (
    <>
      <Head>
        <title>Shopi | Online Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col">
        <nav className='p-4 flex w-full justify-between items-center'>
          <div className="logo w-5 h-5 bg-black rounded-full">
            
          </div>
          <div className="links hidden">
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </div>
          <div className="hamburger flex flex-col gap-[.2rem] items-end">
            <div className="line w-[.75rem] h-[.3rem] bg-black"></div>
            <div className="line w-[1.5rem] h-[.3rem] bg-black"></div>
            <div className="line w-[1.5rem] h-[.3rem] bg-black"></div>
          </div>
        </nav>
        <header className='m-4 border-l-[3px] border-black p-4'>
          <h1 className=' font-semibold text-2xl'>
          Different style and fashion <br /> for everyone
          </h1>
          <button className='bg-black text-white py-3 px-5 text-lg mt-8 mb-20 flex items-center gap-2'>Shop Collection <BsArrowRightShort className='text-3xl'/></button>
        </header>
        <section className='m-4 -mt-20 h-[35vmax] relative'>
          <Image src={headerLady} className="ml-auto w-1/2 h-full object-cover" alt=""/>
          <div className="flex gap-3 w-fit pr-12 card absolute bottom-5  p-3 bg-white translate-x-8">
            <Image className='w-[4rem] aspect-square object-cover' src={glasses} alt=''/>
            <div className="text flex flex-col justify-between">
              <h1 className=' font-semibold'>Glasses</h1>
              <p className='text-sm'>$2</p>
              <div className="stars flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-fit pr-12 card absolute bottom-5 -translate-y-[125%] p-3 bg-white">
            <Image className='w-[4rem] aspect-square object-cover' src={glasses} alt=''/>
            <div className="text flex flex-col justify-between">
              <h1 className=' font-semibold'>Glasses</h1>
              <p className='text-sm'>2$</p>
              <div className="stars flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </section>
        <section className='p-4 mb-4 flex social-proof'>
          <div className="hc w-1/2">
            <h1 className=' font-bold'>2K+</h1>
            <p>Happy Customer</p>
          </div>
          <div className="ib w-1/2">
            <h1 className=' font-bold'>30+</h1>
            <p>International Brands</p>
          </div>
        </section>
        <section className='bg-black px-10 py-5 text-white flex flex-col'>
          <div className="desc text-center flex flex-col items-center my-4">
            <div className="logo text-4xl w-fit"><TbWorld/></div>
            <div className="text">
              <h1 className="font-bold my-2">Worldwide Shop</h1>
              <p className=' text-[.8rem] text-white/70'>We dont limit our store buy from wherever you are.</p>
            </div>
          </div>
          <div className="desc text-center flex flex-col items-center my-4">
            <div className="logo text-4xl w-fit"><MdOutlineLocalShipping/></div>
            <div className="text">
              <h1 className="font-bold my-2">Free Shipping</h1>
              <p className=' text-[.8rem] text-white/70'>In all your purchases over $200 UDS.</p>
            </div>
          </div>
          <div className="desc text-center flex flex-col items-center my-4">
            <div className="logo text-4xl w-fit"><BiLockAlt/></div>
            <div className="text">
              <h1 className="font-bold my-2">Secure Payment</h1>
              <p className=' text-[.8rem] text-white/70'>Your data is protected and your Payments too.</p>
            </div>
          </div>
        </section>
        <section className="summerColl p-5 bg-white">
          <header className='flex justify-between'>
            <h1 className='font-bold'>The Summer Collection</h1>
            <div className="collectionPicker flex gap-2 text-black/50 font-bold">
              <div onClick={(e)=>{clickVal = 1; console.log(e.target)}} className={`01 cursor-pointer ${clickVal===1?"font-bold text-lg text-black":""} `}>01</div>
              <div onClick={(e)=>{clickVal = 2; console.log(e.target)}} className={`02 cursor-pointer ${clickVal===2?"font-bold text-lg text-black":""} `}>02</div>
              <div onClick={(e)=>{clickVal = 3; console.log(e.target)}} className={`03 cursor-pointer ${clickVal===3?"font-bold text-lg text-black":""} `}>03</div>
              <div onClick={(e)=>{clickVal = 4; console.log(e.target)}} className={`04 cursor-pointer ${clickVal===4?"font-bold text-lg text-black":""} `}>04</div>
            </div>
          </header>
        </section>
      </main>
    </>
  )
}
