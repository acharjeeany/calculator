import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ Component }  from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import KeysComponent from './component/KeysComponent'
import OutputComponent from './component/OutputComponent'
import * as contactAction from './actions/contactAction';


class App extends Component{
    constructor(){
        super();

        this.state = {
            result: "",
            history:""
        }
    }


    onClick = button => {

        if(button === "="){
            console.log("trigger-1");
            this.calculate(button)
        }

        else if(button === "reset"){
            this.reset()
        }
        else if(button === "backspace"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = (button) => {
        console.log("trigger-2");
        let result = this.state.result;
        this.setState({
          result: this.props.getResult(result)
        });
        //this.props.getResult(results);
        /*try {
            this.setState({
                result: this.state.result+button+(eval(this.state.result) || "" ) + "",
                history:this.state.history+"  "+this.state.result+button+(eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "Math error"
            })

        }*/
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
            <div className="col-md-4"></div>
            <div className="col-md-3">
                <div className="justify-content-center">
                    <h2 className="text-center">Calculator</h2>
                    <div className="row" id="outputScreen">
                        <OutputComponent result={ this.state.result+"="+this.props.result } />
                    </div>
                      <KeysComponent onClick={this.onClick}/>
                      <div><strong>History</strong></div>
                      <div>{this.state.history}</div>
                </div>
            </div>
            <div className="col-md-5"></div>
            </header>         
        </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
  console.log("trigger-9");
  return {
    result: state.result
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log("trigger-10");
  return {
    getResult: result => dispatch(contactAction.getResult(result)),
    //deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);