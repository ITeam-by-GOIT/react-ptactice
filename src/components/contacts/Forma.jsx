import React, { Component } from 'react';
import styles from '../contacts/forma.module.css';
// import PropTypes from 'prop-types';

export default class Forma extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.formFeedback}>
          <label htmlFor="" className={styles.formLabel}>
            Представьтесь, пожалуйста*
            <span className={styles.formWrapper}>
              <input
                onChange={this.handleChange}
                value={name}
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Ваше имя"
              />
            </span>
          </label>
          <label htmlFor="" className={styles.formLabel}>
            Ваш телефон
            <span className={styles.formWrapper}>
              <input
                onChange={this.handleChange}
                value={number}
                type="tel"
                name="number"
                className={styles.formInput}
                placeholder="+7 (___) ___-__-__"
              />
            </span>
          </label>
          <label htmlFor="" className={styles.formLabel}>
            <span className={styles.formWrapper}>
              <input
                type="text"
                name="file"
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
      </>
    );
  }
  // Forma.propTypes = {
  //     onSubmit: this.propTypes.func,
  // }
}
