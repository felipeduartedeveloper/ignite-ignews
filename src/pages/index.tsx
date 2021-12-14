import Head from 'next/head';
import { SubscribeButton } from '../Components/subscribeButton';

import styles from './home.module.scss';


export default function Home() {
  return (
    <>
    <Head>
      <title>Início | Home</title>
    </Head>
    <h1>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🤞 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/mulher.svg" alt="Girl coding" />
      </main>
    </h1>
    </>
  )
}
