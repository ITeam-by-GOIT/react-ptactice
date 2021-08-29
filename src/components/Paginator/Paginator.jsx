import React, { Component } from 'react';
import ImageList from '../ImageList/ImageList';

export class Paginator extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    searchQuery: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchImage()
        .then(data => data.photos)
        .then(photos =>
          this.setState({
            images: [...prevState.images, ...photos],
          }),
        );
    }
  }
  onSubmitHandler = e => {
    e.preventDefault();
    const { query, searchQuery } = this.state;
    // this.fetchImage().then(data => this.setState({ images: [...data.photos] }));
    if (query !== searchQuery) {
      this.setState({
        page: 1,
        images: [],
      });
    }
    this.setState({ searchQuery: query });
    this.fetchImage()
      .then(data => data.photos)
      .then(photos => this.setState({ images: photos }));
  };

  onClickHandler = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchImage = async () => {
    const result = await fetch(
      `https://api.pexels.com/v1/search?query=${this.state.query}&page=${this.state.page}`,
      {
        headers: {
          Authorization:
            '563492ad6f917000010000011ee3a1d6f1b64b32b5b2d6ac00dd7a5d',
        },
      },
    );
    return result.json();
  };
  onChangeHandler = e => {
    this.setState({ query: e.currentTarget.value });
  };
  render() {
    const { query } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="search"
            value={query}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Пошук</button>
        </form>
        <ImageList images={this.state.images} />
        <button type="button" onClick={this.onClickHandler}>
          load more
        </button>
      </>
    );
  }
}

export default Paginator;
