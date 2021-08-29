import styles from '../contacts/contacts.module.css';
import Forma from './Forma.jsx';
import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <section className={styles.contactsWrapper}>
        <div className={styles.addressBlock}>
          <h2 className={styles.mainTitle}>Работаем по всей России</h2>
          <p className={styles.addressTitle}>Офис в Санкт-Петербурге:</p>
          <ul className={styles.addressContainer}>
            <li className={styles.addressItem}>
              <a className={styles.phone} href="tel:+78124382635">
                +7 (812) 438-26-35
              </a>
            </li>
            <li className={styles.addressItem}>
              <a href="mailto:info@skinfra.ru">info@skinfra.ru</a>
            </li>
            <li className={styles.addressItem}>
              <a href="https://goo.gl/maps/PkxUZTVHjurX6CUi9">
                195197, Санкт-Петербург, Кондратьевский пр., д. 15, к. 2, л. З,
                офис 204 БЦ "Фернан Леже"
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.feedback}>Свяжитесь с нами</h3>
          <p className={styles.textWrapper}>
            Задайте вопрос, пришлите коммерческое предложение или пригласите на
            тендер
          </p>
          <Forma />
        </div>
        <div className={styles.imageBlock}></div>
      </section>
    );
  }
}
