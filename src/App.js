import React from 'react';
import './App.css';
import Button from "./Button";
import myButtons  from "./data";
class App extends  React.Component{
  constructor(props) {
      super(props);
      this.state = {
          screenValue: ''
      }


  }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }


    playAudio= (url, value) => {
       new Audio(url).play();
      this.setState({
          screenValue: value
      })
    }


  handleKeyDown = (e, key, url, value) => {
     if(e.keyCode === 81) {
         new Audio(url).play()
     }
      this.setState({
          screenValue: value
      })

  }


  render() {
      return (
          <div className="App">
              <div className="container">
                 <div className="buttons_container">
                     {myButtons.map((item, index) =>
                         <Button
                           item={item}
                           onClick={this.playAudio}
                           displayInScreen={this.displayInScreen}
                           onKeyDown={this.handleKeyDown}
                         />
                        )}
                 </div>

                  <div className="settings_container">

                      <div
                             className="screen"
                      >{this.state.screenValue}</div>

                  </div>
              </div>

          </div>
      );
  }

}

export default App;
