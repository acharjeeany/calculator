import React,{ Component }  from 'react';

class KeysComponent extends Component{
	render(){
		return(
			<div>
			<div className="row">
				<button name="reset" className="col-md-9"  onClick={event => this.props.onClick(event.target.name)}>Clear</button>
				<button name="/" className="operator col-md-3"  onClick={event => this.props.onClick(event.target.name)}>/</button>
			</div>
			<div className="row">
				<button className="col-md-3" name="7" onClick={event => this.props.onClick(event.target.name)}>7</button>
				<button className="col-md-3" name="8" onClick={event => this.props.onClick(event.target.name)}>8</button>
				<button className="col-md-3" name="9" onClick={event => this.props.onClick(event.target.name)}>9</button>
				<button className="col-md-3 operator" name="backspace" onClick={event => this.props.onClick(event.target.name)}>\</button>
			</div>
			<div className="row">
				<button className="col-md-3" name="4" onClick={event => this.props.onClick(event.target.name)}>4</button>
				<button className="col-md-3" name="5" onClick={event => this.props.onClick(event.target.name)}>5</button>
				<button className="col-md-3" name="6" onClick={event => this.props.onClick(event.target.name)}>6</button>
				<button className="col-md-3 operator" name="*" onClick={event => this.props.onClick(event.target.name)}>*</button>
			</div>
			<div className="row">
				<button className="col-md-3" name="3" onClick={event => this.props.onClick(event.target.name)}>3</button>
				<button className="col-md-3" name="2" onClick={event => this.props.onClick(event.target.name)}>2</button>
				<button className="col-md-3" name="1" onClick={event => this.props.onClick(event.target.name)}>1</button>
				<button className="col-md-3 operator" name="-" onClick={event => this.props.onClick(event.target.name)}>-</button>
			</div>
			<div className="row">
				<button className="col-md-3" name="0" onClick={event => this.props.onClick(event.target.name)}>0</button>
				<button className="col-md-6 operator" name="=" onClick={event => this.props.onClick(event.target.name)}>=</button>
				<button className="col-md-3 operator" name="+" onClick={event => this.props.onClick(event.target.name)}>+</button>
			</div>
			</div>
			);
	}

}



export default KeysComponent;