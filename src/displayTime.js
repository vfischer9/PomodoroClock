import React from "react"

class DisplayTime extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
      }

    state = {
        minutes: 25,
        seconds: 0
      }

    startTime() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => {
                if(prevState.seconds !== 0){
                    return {
                        seconds: prevState.seconds - 1
                    }
                } else if (prevState.seconds === 0 && prevState.minutes === 0){
                    return {
                        minutes: 0,
                        seconds: 0
                    }
                }
                else{
                    return {
                        minutes: prevState.minutes - 1,
                        seconds: 59
                    }
                }
            })
        }, 1000)
    }

    stopTime() {
        clearInterval(this.myInterval)
    }

    handleClick1() {
        this.setState(state => {
            return {
                minutes: state.minutes + 1
            }
        }) 
    }

      handleClick2() {
        this.setState(state => {
            if(state.seconds < 60){
                return {
                    seconds: state.seconds + 1
                }
            }
            else{
                return{
                    seconds: 0,
                    minutes: state.minutes + 1
                }
            }
            
        }) 
      }

      handleClick3() {
        this.setState(state => {
            if(state.minutes > 0){
                return {
                    minutes: state.minutes - 1
                }
            } else{
                return {
                    minutes: 0
                }
            }
            
        }) 
      }

      handleClick4() {
        this.setState(state => {
            if(state.seconds > 0){
                return {
                    seconds: state.seconds - 1
                }
            } else if (state.seconds === 0 && state.minutes !== 0){
                return {
                    seconds: 59
                }
            } else{
                return {
                    seconds: 0
                }
            }
        }) 
      }

    render(){
        const { minutes, seconds } = this.state
        return (
            <div>
                <h1>Pomodoro Clock</h1>
                <button onClick={this.startTime}>Start Timer</button>
                <button onClick={this.stopTime}>Stop Timer</button>
                <div class='timer'>
                    <span class='clock'>Time: {minutes}:{seconds < 10 ? `0${ seconds }` : seconds }</span>
                </div>
                <div class='addMore'>
                    <button onClick={this.handleClick1}>Add 1 Min</button>
                    <button onClick={this.handleClick2}>Add 1 Sec</button>
                    <button onClick={this.handleClick3}>Subtract 1 Min</button>
                    <button onClick={this.handleClick4}>Subtract 1 Sec</button>
                </div>
            </div>
            )
    }
}


export default DisplayTime