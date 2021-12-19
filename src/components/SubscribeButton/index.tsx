import { useSession, signIn } from 'next-auth/react';
import style from './style.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { status } = useSession(); 

  const handleSubscribe = () => {
    if(status !== 'authenticated') {
      signIn('github');
      return;
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