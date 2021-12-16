import style from './style.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button className={style.subscribeButton}>
      Subscri now
    </button>
  );
} 