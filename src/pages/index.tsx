import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../Components/subscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/mulher.svg" alt="Girl coding" />
      </main>
    </h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K6PkXAdQ1SL6i0fzEqeBlJa')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    }
  }
}