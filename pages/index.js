import Header from '@/components/header';
import KeyVisual from '@/components/keyVisual';
import Footer from '@/components/footer';
import { useSession, signIn, signOut } from "next-auth/react"

import styles from '@/styles/Home.module.scss'

export default function Home() {
  // return (
  //   <div className='wrap'>
  //     <Header/>
  //     <KeyVisual/>
  //     <Footer/>
  //   </div>
  // )
  const { data: session } = useSession()
  console.log(session);
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
