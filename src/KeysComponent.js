import React,{ Component }  from 'react';

class KeysComponent extends Component{

	render() {
		return(
			<div className="buttons">
				<h2>Calculator</h2>
				<div>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
				</div>
				<div>
					<button>5</button>
					<button>6</button>
					<button>7</button>
					<button>8</button>
				</div>
				<div>
					<button>9</button>
					<button>0</button>
					<button>+</button>
					<button>-</button>
				</div>
			</div>
			)
	}

}



export default KeysComponent;