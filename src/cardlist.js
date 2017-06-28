import React from 'react'
import Card from './mtgcard'

class CardList extends React.Component {
  render () {
    return (
      <div className='ui segment link four cards'>
        {this.props.cards.map((c) => <Card image={c.image} set={c.set}/>)}
      </div>
    )
  }
}

export default CardList
