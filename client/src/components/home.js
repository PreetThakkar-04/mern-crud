import React , {Component} from 'react'
import './home.css'

class Home extends Component {
  render(){
    return(
      <div className="home-wrap">
        <div className="landing">
          <h1 className="home-title">SoNIC</h1>
            <div className="land-desc col-lg-6 col-md-7">
               An App to connect! <a href="/auth/google">Click here</a> to login with Google.
            </div>
        </div>
      </div>
    );
  }
}

export default Home
