import { createClient } from 'pexels';
import { Component } from 'react';
// import s from './Pexel.module.css';
import axios from 'axios';

class Pexel extends Component {
  state = {
    client: createClient(
      '563492ad6f91700001000001343ef221160e48ccbd17601e36c1fc41',
    ),
    query: '',
    page: 1,
    images: [],
  };

  changeHandler = e => {
    this.setState({ query: e.currentTarget.value });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(e.target.elements.search.value);
    
    const { query } = this.state;

    const obj = axios.create({
      baseURL: 'https://api.pexels.com/v1',
      headers: {
        Authorization: '563492ad6f91700001000001343ef221160e48ccbd17601e36c1fc41'
      }
    });
    
    obj.get(`/search?query=${query}`).then(response => this.setState({ images: [...response.data.photos] }))
  };

  render() {
    const { query, images } = this.state;
    const { changeHandler, onSubmit } = this;
    return (
      <section>
        <div>
            <form onSubmit={onSubmit}>
            <input
                type="text"
                value={query}
                name="search"
                onChange={changeHandler}
            ></input>
            <button type="submit">Submit</button>
            </form>
        </div>
        {images && <ul>
            {images.map(image => {
              return  <li key={image.id}>
                  <img src={image.src.small} alt={image.photographer}></img>
                </li>
            })}
        </ul>}
        
      </section>
    );
  }
}

export default Pexel;
