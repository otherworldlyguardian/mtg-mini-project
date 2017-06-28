import React, { Component } from 'react'
import CardList from './cardlist'

class App extends Component {
  constructor () {
    super()

    this.state = {
      page: null,
      cards: []
    }
  }

  componentWillMount () {
    this.fetchCards(1)
  }

  fetchCards (page) {
    fetch(`http://api.magicthegathering.io/v1/cards?page=${page}`)
    .then(resp => resp.json())
    .then(data => this.initCards(data, page))
  }

  initCards (data, page) {
    let cards = data.cards.map(function (c) {
      return {image: c.imageUrl, set: c.setName}
    })
    this.setState({
      page: page,
      cards: cards
    })
  }

  prevPage () {
    if (this.state.page > 1) {
      this.fetchCards(--this.state.page)
    }
  }

  nextPage () {
    this.fetchCards(++this.state.page)
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui pointing menu">
          <a className="item active">
            MTG Library
          </a>
          <div className="ui right menu buttons">
            <button onClick={this.prevPage.bind(this)} className="ui icon labeled button">
              <i className="left chevron icon"></i>
              Back
            </button>
            <button onClick={this.nextPage.bind(this)} className="ui right labeled icon button">
              <i className="right chevron icon"></i>
              Next
            </button>
          </div>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input id="search-text" type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App
