import React, { Component }from 'react';
import { Button } from 'reactstrap';
// import './grid.css'


class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: []
		}
		this.bubbleSort = this.bubbleSort.bind(this);
	}

	componentDidMount() {
		this.reset();
	}

	reset() {
		const arr = [];
		for(var i=1; i<=100; i++) {
			const num = Math.floor((Math.random()*300) + 5)
			arr.push(num);
		}

		this.setState({arr: arr});
	}

	bubbleSort() {
		var a = this.state.arr;
		var v = setInterval(()=>{
			var flag=false;
			for(var i=1;i<a.length; i++){
				if(a[i] < a[i-1]){
					flag=true;
					var temp=a[i];
					a[i]=a[i-1];
					a[i-1]=temp;
					this.setState({arr: a});
					break;
				}
			}
			
			if(!flag){
				console.log("completed");
				clearInterval(v);
			}

		}, 1);
	}
	
	render() {

		var idx=0;
		var list = this.state.arr.map((val) => {
			idx++;
			return(
				<div key={idx} className="array-color">
					<div className="body-col" style={{height: `${val}px`}}></div>
				</div>
			);
		});

		return (
			<div className="container-fluid height-max">
				<div className="flex-container height-max">
					{list}
				</div>
				<Button type="button" color="success" onClick={this.bubbleSort}>Bubble Sort</Button>
			</div>

		);
	}
}

export default Grid;