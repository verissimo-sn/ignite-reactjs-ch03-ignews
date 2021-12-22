import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>22 de dezenbro de 2021</time>
            <strong>Primeira aplicação com CMS e pagamento via stripe</strong>
            <p>
              Aplicação criada no curso ignite de nextJs da Rocketseat. 
              Nesse app utilizamos stype para pagamento de mensalidades, 
              FaunaDb como banco de dados não relacional para utilização de webhooks 
              e prismic CMS para gerenciamento de conteudo.
            </p>
          </a>

          <a href="#">
            <time>22 de dezenbro de 2021</time>
            <strong>Primeira aplicação com CMS e pagamento via stripe</strong>
            <p>
              Aplicação criada no curso ignite de nextJs da Rocketseat. 
              Nesse app utilizamos stype para pagamento de mensalidades, 
              FaunaDb como banco de dados não relacional para utilização de webhooks 
              e prismic CMS para gerenciamento de conteudo.
            </p>
          </a>

          <a href="#">
            <time>22 de dezenbro de 2021</time>
            <strong>Primeira aplicação com CMS e pagamento via stripe</strong>
            <p>
              Aplicação criada no curso ignite de nextJs da Rocketseat. 
              Nesse app utilizamos stype para pagamento de mensalidades, 
              FaunaDb como banco de dados não relacional para utilização de webhooks 
              e prismic CMS para gerenciamento de conteudo.
            </p>
          </a>
        </div>
      </main>

    </>
  );
}