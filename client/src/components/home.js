import React , {Component} from 'react'
import './home.css'

class Home extends Component {
  render(){
    return(
      <div className="home-wrap">
        <div className="landing">
          <h1 className="home-title">SoNIC</h1>
              <div className="login-home">
                  <form>
                          <div>
                          <label>Email  </label>
                          <input
                              type="email"
                              name="email"
                          />
                          </div>
                          <div>
                              <label>Password</label>
                              <input
                                  type="password"
                                  name="password"
                              />
                          </div>
                 </form>
              </div>
              <div classname="button-home">
                              <input type="submit" value = "Login"/>
                              <input type="submit" value = "Signup"/>
              </div>
              <div className="land-desc col-lg-6 col-md-7">
                    <a href="/auth/google">Login</a> with Google.
              </div>
        </div>
      </div>
    );
  }
}

export default Home
