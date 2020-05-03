import React from 'react'
import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1/gundams'


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gundam: [],
   }
  }

componentDidMount() {
  request.get(apiUrl)
  .then(res => {
  const gundam = res.body
  // console.log( res.body)
    this.setState ({gundam: gundam})
   })
  }
  

  render() { 
   console.log(this.state.gundam)
   
    return ( 
      <div>
      {this.state.gundam.map((gundam) => {
        return (
          <>
            <p key={gundam.id}>{gundam.unit}</p>
            <p key={gundam.id}>Grade:{gundam.grade}</p>
            <p key={gundam.id}>Scale:{gundam.scale}</p>
            <p key={gundam.id}>Price:{gundam.price}</p>
            <img key={gundam.id} src={gundam.picture} alt="gundamImage" />
            <br />
            <a href="/cart" classname="cart-link">Add</a>
            <br />
            <br />
          </>
        )
      })}
    </div>
  );
}
}
 
export default Home;