import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ Component }  from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';
import { connect } from 'react-redux';
import KeysComponent from './component/KeysComponent'
import OutputComponent from './component/OutputComponent'
import { initialState } from "./constants";
import {getResult,resetAll,getHistory,showOthers}  from './actions/calculatorAction';


class App extends Component{

    handleClick = button => {

        if(button === "="){
            this.props.getResult()
        }

        else if(button === "reset"){
            this.props.resetAll()
        }
        else if(button === "h"){
            this.props.getHistory()
        }

        else {
            this.props.showOthers(button)
        }
    };



    render(){
        return (
        <div className="App">
            <header className="App-header">
            <div className="col-md-4"></div>
            <div className="col-md-3">
                <div className="justify-content-center">
                    <h2 className="text-center">Calculator</h2>
                    <div className="row" id="outputScreen">
                        <OutputComponent result={this.props.result }/>
                    </div>
                      <KeysComponent handleClick={this.handleClick}/>
                      <div><strong>History</strong></div>
                      <div>{initialState.history}</div>
                </div>
            </div>
            <div className="col-md-5"></div>
            </header>         
        </div>
        );
    }

}



const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  getResult,resetAll,getHistory,showOthers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);