import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/company"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Компания
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vacancy"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Вакансии
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Услуги
          </NavLink>
          <ul>
            <li>
              {' '}
              <NavLink
                to="/services/1"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                Сети водоснабжения
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink
                to="/services/2"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                Водоотведение и канализация
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/3"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                Наружные тепловые сети
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/4"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                Монтаж Ж/Б конструкций
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/5"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                Благоустройство территорий
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/proecty"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/politic_confident"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Политика конфиденциальности
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
