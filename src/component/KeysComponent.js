import React,{ Component }  from 'react';

class KeysComponent extends Component{

	render() {
		return(
			<div className="buttons">
				<div>
					<button name="*" onClick={event => this.props.onClick(event.target.name)}>*</button>
					<button name="/" onClick={event => this.props.onClick(event.target.name)}>/</button>
					<button name="+" onClick={event => this.props.onClick(event.target.name)}>+</button>
					<button name="-" onClick={event => this.props.onClick(event.target.name)}>-</button>
					<button name="reset" onClick={event => this.props.onClick(event.target.name)}>Clear</button>
					<button name="=" onClick={event => this.props.onClick(event.target.name)}>=</button>
				</div>
				<div>
					<button name="1" onClick={event => this.props.onClick(event.target.name)}>1</button>
					<button name="2" onClick={event => this.props.onClick(event.target.name)}>2</button>
					<button name="3" onClick={event => this.props.onClick(event.target.name)}>3</button>
					<button name="backspace" onClick={event => this.props.onClick(event.target.name)}>Backspace</button>
				</div>
				<div>
					<button name="4" onClick={event => this.props.onClick(event.target.name)}>4</button>
					<button name="5" onClick={event => this.props.onClick(event.target.name)}>5</button>
					<button name="6" onClick={event => this.props.onClick(event.target.name)}>6</button>
					<button name="7" onClick={event => this.props.onClick(event.target.name)}>7</button>
					<button name="8" onClick={event => this.props.onClick(event.target.name)}>8</button>
					<button name="9" onClick={event => this.props.onClick(event.target.name)}>9</button>
					<button name="0" onClick={event => this.props.onClick(event.target.name)}>0</button>

				</div>
				<div>
					
					
				</div>
				
			</div>
			)
	}

}



export default KeysComponent;