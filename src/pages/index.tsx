import style from './home.module.scss';

export default function Home() {
  return (
    <main className={style.contentContainer}>
      <section className={style.hero}>
        <span>👏 Hey, welcome!</span>
        <h1>New about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
          <span>for $9.90 month</span>
        </p>
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
}
