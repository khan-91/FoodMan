import { Component } from 'react'
import Loading from './Loading';
export class Home extends Component {
  render() {
    document.title = "Home"
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default Home;