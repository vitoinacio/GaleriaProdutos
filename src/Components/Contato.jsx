import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Galeria | Contato" description="Pagina de Contatos" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>victor.hugo.ina10@gmail.com</li>
          <li>(21) 97922-5977</li>
          <li>Rio de Janeiro, RJ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
