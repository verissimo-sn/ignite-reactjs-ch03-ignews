import { GetServerSideProps } from 'next';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import style from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <main className={style.contentContainer}>
      <section className={style.hero}>
        <span>👏 Hey, welcome!</span>
        <h1>New about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
          <span>for {product.amount} month</span>
        </p>

        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { id, unit_amount } = await stripe.prices.retrieve('price_1K7Gl5IVUW9yporc7nlporbn');
  
  const product = {
    priceId: id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(unit_amount/100)
  }

  return { 
    props: {
      product
    }
  }
}
