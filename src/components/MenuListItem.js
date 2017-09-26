import React, { Component } from 'react'

class MenuListItem extends Component {
  render(){
    const topMenu = this.props.appetizers.map(item => {
      return(
        <div key={item._id}>
          {item.price} - {item.dish} - {item.description}
        </div>
      )
    })

    const midMenu = this.props.entrees.map(item2 => {
      return(
        <div key={item2._id}>
          {item2.price} - {item2.dish} - {item2.description}
        </div>
      )
    })

    const bottomMenu = this.props.desserts.map(item3 => {
      return(
        <div key={item3._id}>
          {item3.price} - {item3.dish} - {item3.description}
        </div>
      )
    })
    
    return(
      <div>
        <h2>
          Appetizers
        </h2>
        {topMenu}
        <h2>
          Entrees
        </h2>
        {midMenu}
        <h2>
          Desserts
        </h2>
        {bottomMenu}
      </div>
    )
  }
}

export default MenuListItem
