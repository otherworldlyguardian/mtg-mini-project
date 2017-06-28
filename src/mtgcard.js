import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <div className="ui raised card">
        <a className="image">
          <img src={this.props.image} alt=''/>
        </a>
        <div className="content">
          <div className="description">
            {this.props.set}
            <span className="right floated">
              <i className="heart outline like icon"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
