import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Grid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: []
		};

		this.bubbleSort = this.bubbleSort.bind(this);
		this.insertionSort = this.insertionSort.bind(this);
		this.sorted = this.sorted.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		this.reset();
	}

	reset() {
		var arr=[];
		for(var i=1; i<=50; i++)
			arr.push(Math.floor((Math.random()*700) + 1));

		this.setState({arr: arr});
		console.log(this.state.arr);
	}

	

	bubbleSort() {
		var arr = this.state.arr;
		var en = 1;
		var h = setInterval(()=>{
			
			if(this.sorted(arr)) {
				clearInterval(h);
				alert("Sorted");
			}

			if(en>=arr.length){
				en=1;
			}

			if(arr[en] < arr[en-1]){
				var cur = arr[en];
				arr[en] = arr[en-1];
				arr[en-1] = cur;
				this.setState({arr: arr});
			}

			en++;

		}, 0);
	}

	sorted(arr) {
		for(var i=1;i<arr.length;i++){
			if(arr[i]<arr[i-1])
				return false;
		}
		return true;
	}

	insertionSort() {
		var arr = this.state.arr;

		var st=0, en=0;
		var h = setInterval(() => {
			console.log(en + " " + st);
			if(en >= arr.length){
				clearInterval(h);
				alert("Sorted");
			}

			if(st==-1){
				en++;
				st=en-1;
			}else
			if(arr[st]>arr[st+1]){
				var cur = arr[st];
				arr[st] = arr[st+1];
				arr[st+1] = cur;
				st--;
				this.setState({arr: arr});
			}else{
				en++;
				st=en-1;
			}
		}, 0);
	}

	render() {

		const list = this.state.arr.map((val, idx) => {
			return(
				<div key={idx} style={{height: `${750}px`}} className="bars">
					<div className="innerbars" style={{height: `${750-val}px`}}></div>
				</div>
			);
		})

		return (
			<div className="container-fluid">
				<div className="row my-5">
					<div className="col-12 offset-1 rounded col-sm-2 screen">
						<ButtonGroup vertical>
							<Button color="dark" size="lg" onClick={this.bubbleSort}>Bubble Sort</Button>
							<Button color="dark" size="lg" onClick={this.insertionSort}>Insertion Sort</Button>
							<Button color="dark" disabled size="lg">Merge Sort</Button>
							<Button color="secondary" size="lg" onClick={this.reset}>Reset</Button>
						</ButtonGroup>
						
					</div>
					<div className="col-12 col-sm-8 border-left border-right rounded main-screen">
						{list}
						
					</div>
				</div>
			</div>
		);
	}
	
}

export default Grid;