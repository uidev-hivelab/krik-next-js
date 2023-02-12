import Header from '@/components/header';
import KeyVisual from '@/components/keyVisual';
import Footer from '@/components/footer';

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className='wrap'>
      <Header/>
      <KeyVisual/>
      <Footer/>
    </div>
  )
}
