import styles from '../contacts/contacts.module.css';

function Contacts(props) {
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
        <form className={styles.formFeedback}>
          <label htmlFor="" className={styles.formLabel}>
            Представьтесь, пожалуйста*
            <span className={styles.formWrapper}>
              <input
                type="text"
                name="user-name"
                className={styles.formInput}
                placeholder="Ваше имя"
              />
            </span>
          </label>
          <label htmlFor="" className={styles.formLabel}>
            Ваш телефон
            <span className={styles.formWrapper}>
              <input
                type="text"
                name="user-phone"
                className={styles.formInput}
                placeholder="+7 (___) ___-__-__"
              />
            </span>
          </label>
          <label htmlFor="" className={styles.formLabel}>
            <span className={styles.formWrapper}>
              <input
                type="text"
                name="user-file"
                className={styles.formInput}
                placeholder="Прикрепить файл"
              />
            </span>
          </label>
          <button type="submit" className={styles.buttonCall}>
            Перезвоните мне
          </button>
          <span>
            <input
              type="checkbox"
              name="user-policy"
              id="check_policy"
              className={styles.checkbox}
            />
            <label htmlFor="check_policy" className={styles.labelCheck}>
              Я соглашаюсь с политикой конфиденциальности
            </label>
          </span>
        </form>
      </div>
      <div className={styles.imageBlock}></div>
    </section>
  );
}
export default Contacts;
