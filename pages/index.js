import Head from 'next/head'
import Navbar from '../component/header/Navbar'
import Image from 'next/image'
import style from '../styles/Home.module.css'
export default function Home() {
  return (
      <>
        <div>
        <Navbar/>
        </div>
        <div className={style.image} >
            <Image

                src='/assets/hero.jpg'
                alt="Picture of the author"
                layout='fill'
            />
        </div>



        <div className={style.Cardgroup}>
                  <div className={style.CardgroupItem}>
                      <Image
                        src='/assets/face9.jpg'
                        alt="Picture of the author"
                        width={350}
                        height={200}
                        />
                      <p>Boris</p>
                  </div>
                  <div className={style.CardgroupItem}>

                  </div>

                  <div className={style.CardgroupItem}>

                  </div>
        </div>
      </>
  )
}
