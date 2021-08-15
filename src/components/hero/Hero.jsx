import logo from './logo/СК_ИНФРАСТРУКТУРА_logo_2 2.png'
const Hero = ({ props }) => {
    return (
        <section>
            <h1>
              <img src={logo} alt="logo" />  
            </h1>
            <ul>
                <li>Монтаж сетей 
водоснабжения</li>
                <li>Водоотведение
и канализация </li>
                <li>Наружные тепловые 
сети и тепловые 
пункты </li>
                <li>Монтаж Ж/Б 
конструкций</li>
                <li>Благоустройство 
территории</li>
            </ul>
            <h2>Полный комплекс работ:</h2>
            <ul>
                {props.map(prop =>
                    <li key={prop.id}>
                        <a href={prop.url}>
                            {prop.link}
                              </a>
                            </li>
                      
                    )}
                
                
            </ul>
         </section>
     )
}
 
export default Hero