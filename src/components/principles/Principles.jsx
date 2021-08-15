function Principles({ props }) {
  return (
    <section>
      <h2>Наши принципы</h2>
      <ul>
        {props.map(prop => (
          <li key={prop.id}>
            <h3>{prop.type}</h3>
            <p>{prop.description[0]}</p>
            <p>{prop.description[1]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Principles;
