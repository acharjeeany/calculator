import React,{ Component }  from 'react';

class KeysComponent extends Component{

	render() {
		return(
			<div className="buttons">
				<h2>Calculator</h2>
				<div><input type="text" placeholder="Output" /></div>
				<div>
					<button>*</button>
					<button>/</button>
					<button>+</button>
					<button>-</button>
					<button>Clear</button>
					<button>=</button>
				</div>
				<div>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>Backspace</button>
				</div>
				<div>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button>0</button>

				</div>
				<div>
					
					
				</div>
				
			</div>
			)
	}

}



export default KeysComponent;