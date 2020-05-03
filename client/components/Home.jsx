import React from 'react'
import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1/gundam'


class Home extends React.Component {
  state = { 
    id: '',
    unit: '',
    grade: '',
    price: '',
    picture: '',
   }

componentDidMount() {
  request.get(apiUrl)
  .then(res => {
    const {id, unit, grade, price, picture} = res.body
    this.setState ({id, unit, grade, price, picture})
    console.log(res.body)
  })
}

  render() { 
    const gundam = this.state.gundam
    return ( 
      <h1>Hello</h1>
    );
  }
}
 
export default Home;