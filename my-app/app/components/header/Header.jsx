import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'
import Image1 from '../../assets/man_using_pc-removebg-preview.png'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <h1>Designing & Developing Digital Experiences That Stand Out</h1>
          <p>I'm a web designer, developer, and graphic artist who blends creativity with code to build fast, stunning, and user-friendly websites. Let's bring your vision to life.</p>
          <div className={styles.headerCta}>
              <Link href="/projects" className={styles.btn1} style={{ textDecoration: 'none' }}>
                 Projects
              </Link>
              <Link href="/contact" className={styles.btn2} style={{ textDecoration: 'none' }}>
                 Hire me
             </Link>
         </div>
        </div>
        <div className={styles.headerRight}>
          <Image 
            src={Image1} 
            alt="Web designer working" 
            priority
            className={styles.headerImage}
          />
        </div>
      </div>
    </header>
  )
}

export default Header