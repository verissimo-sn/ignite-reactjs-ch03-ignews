import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import style from './style.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { status } = useSession(); 

  const handleSubscribe = async () => {
    if(status !== 'authenticated') {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('subscribe')
      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      stripe.redirectToCheckout({ sessionId });

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <button
      className={style.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscri now
    </button>
  );
} 