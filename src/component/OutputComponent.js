import React,{ Component }  from 'react';

class OutputComponent extends Component{

	
	render() {
        let {result} = this.props.result;
        return (
            
            <div><p className="outputScreen">{result}</p></div>
    );
    }
}


export default OutputComponent;