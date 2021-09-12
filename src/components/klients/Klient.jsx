import React from 'react';
const Klient = ({ props }) => {
  return (
    <section>
      <h2>Наши клиенты и проекты</h2>
      <button>Все проекты</button>
      <ul>
        {props.map(prop => (
          <li key={prop.id}>
            <div>
              <img src={prop.img} alt="картинка-логотип" />
            </div>
            <div>
              <p>{prop.desciption}</p>
              <p>{prop.adress}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Klient;
