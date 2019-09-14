import React,{ Component }  from 'react';

class KeysComponent extends Component{
	constructor(){
		super();
		this.state={
			/* Array assigning Started*/
			keyValues:[
			/*First Array*/
				{
					id:1,
					keys:[
						{
							id:1,
							name:'reset',
							value:'clear',
							size:'col-md-4'
						},
						{
							id:2,
							name:'h',
							value:'History',
							size:'col-md-8 history'
						}
					]
				},
			/*Second Array*/
				{
					id:2,
					keys:[
						{
							id:1,
							name:'7',
							value:'7',
							size:'col-md-3'
						},
						{
							id:2,
							name:'8',
							value:'8',
							size:'col-md-3'
						},
						{
							id:3,
							name:'9',
							value:'9',
							size:'col-md-3'
						},
						{
							id:4,
							name:'/',
							value:'/',
							size:'col-md-3 operator'
						}
					]
				},
			/*Third Array*/
				{
					id:3,
					keys:[
						{
							id:1,
							name:'4',
							value:'4',
							size:'col-md-3'
						},
						{
							id:2,
							name:'5',
							value:'5',
							size:'col-md-3'
						},
						{
							id:3,
							name:'6',
							value:'6',
							size:'col-md-3'
						},
						{
							id:4,
							name:'*',
							value:'*',
							size:'col-md-3 operator'
						}
					]
				},
			/*Fourth Array*/
				{
					id:4,
					keys:[
						{
							id:1,
							name:'1',
							value:'1',
							size:'col-md-3'
						},
						{
							id:2,
							name:'2',
							value:'2',
							size:'col-md-3'
						},
						{
							id:3,
							name:'3',
							value:'3',
							size:'col-md-3'
						},
						{
							id:4,
							name:'-',
							value:'-',
							size:'col-md-3 operator'
						}
					]
				},
			/*Fifth Array*/
				{
					id:2,
					keys:[
						{
							id:1,
							name:'0',
							value:'0',
							size:'col-md-3'
						},
						{
							id:2,
							name:'=',
							value:'=',
							size:'col-md-6 operator'
						},
						{
							id:3,
							name:'+',
							value:'+',
							size:'col-md-3 operator'
						}
					]
				}
				]
			/* Array assigning Ended*/	
		};
	}
	render(){
		var {keyValues}=this.state;
		return(
			<div>
				{keyValues.map(el=>
					<div className="row">
					{el.keys.map(ev=>
						<button key={ev.id.toString()} className={ev.size} name={ev.name} onClick={event => this.props.handleClick(event.target.name)}>{ev.value}</button>
						)}

					</div>
				)}
			</div>
		);
	}


}

export default KeysComponent;