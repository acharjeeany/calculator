import React,{ Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import KeysComponent from './component/KeysComponent'
import OutputComponent from './component/OutputComponent'

class App extends Component{
	constructor(){
        super();

        this.state = {
            result: ""
        }
    }


    onClick = button => {

        if(button == "="){
            this.calculate(button)
        }

        else if(button == "reset"){
            this.reset()
        }
        else if(button == "backspace"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = (button) => {
        try {
            this.setState({
                result: this.state.result+button+(eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "Math error"
            })

        }
    };

    reset = () => {
    	this.setState({
    		result:""
    	})
    }

    backspace = () => {
    	this.setState({
    		result:this.state.result.slice(0,this.state.result.length-1)
    	})
    }

    render(){
    	return (
	    <div className="App">
	      	<header className="App-header">
	      	<h2>Calculator</h2>
	      	<OutputComponent result={this.state.result}/>
	        <KeysComponent onClick={this.onClick}/>
	      	</header>
	      
	    </div>
  		);
    }

}

export default App;
