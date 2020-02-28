import React , {Component} from 'react'
import './home.css'

class Home extends Component {
  render(){
    return(
      <div className="home-wrap">
        <div className="landing">
          <h1 className="home-title" style="background-color:white; ">SoNIC</h1>
            <div className="land-desc col-lg-6 col-md-7">
                <a href="/auth/google" style="color:red; background-color:white;">Login</a> with Google.
            </div>
        </div>
      </div>
    );
  }
}

export default Home
