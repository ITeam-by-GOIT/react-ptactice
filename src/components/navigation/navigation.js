import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
export default function Navigation() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: '/',
              state: { from: location },
            }}
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
            to={{
              pathname: `/company`,
              state: { from: location },
            }}
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
            to={{
              pathname: '/vacancy',
              state: { from: location },
            }}
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
            to={{
              pathname: '/services',
              state: { from: location },
            }}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Услуги
          </NavLink>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: '/services/1',
                  state: { from: location },
                }}
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
                to={{
                  pathname: '/services/2',
                  state: { from: location },
                }}
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
                to={{
                  pathname: '/services/3',
                  state: { from: location },
                }}
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
                to={{
                  pathname: '/services/4',
                  state: { from: location },
                }}
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
                to={{
                  pathname: '/services/5',
                  state: { from: location },
                }}
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
            to={{
              pathname: '/proecty',
              state: { from: location },
            }}
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
            to={{
              pathname: '/contacts',
              state: { from: location },
            }}
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
            to={{
              pathname: '/politic_confident',
              state: { from: location },
            }}
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
