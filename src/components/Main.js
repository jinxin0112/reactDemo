require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import imageDatas from '../data/imageDatas';

//利用自执行函数获取图片信息
const imgDatas = ((imgArr)=>{
	for(let i=0;i<imgArr.length;i++){
		let singleImageData = imgArr[i];
		singleImageData.imgUrl = require('../images/'+imgArr[i].fileName);
		imgArr[i] = singleImageData;
	}
	return imgArr;
})(imageDatas);

class ImgFigure extends React.Component {
	
	constructor(props){
		super(props);
		this.state = props;
	}
	
	render () {
		return (
			<figure className="img-figure">
				<img className="figure-img" src={this.state.data.imgUrl} alt={this.state.data.title}/>
				<h2 className="img-title">{this.state.data.title}</h2>
			</figure>
		)
	}
}

class AppComponent extends React.Component {	
	
	constructor(props){
		super(props);
		this.state = {
			stageStyle : {
		  		width:document.documentElement.clientWidth+'px',
		  		height:document.documentElement.clientHeight+'px'				
			},
			constants : {
		  		centerPos : {
		  			top : document.documentElement.clientHeight/2-180 + 'px',
		  			left: document.documentElement.clientWidth/2-160 + 'px'
		  		},
		  		xRange : [-160,document.documentElement.clientWidth/2-160],
		  		yRange : [-160,40]				
			}
		}
	}
  
  	componentWillMount() {
  		//console.log(this);
  	}
  
    render() {
	
	  	let controllerUnits = [],
	  		imgFigures = [];
	  		 		
	  	imgDatas.forEach((value,index)=>{
	  		imgFigures.push(<ImgFigure data={value} ref={'figure'+index}/>);
	  	});
	
	    return (
			<section className="stage" style={this.state.stageStyle}>
				<section className="img-sec">
					{imgFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
			</section>
	    );
    }
    
  	componentDidMount() {
  		console.log(this.refs);
  		for(let i=0;i<imgDatas.length;i++){
  			let dom = ReactDOM.findDOMNode(this.refs['figure'+i]);
  			console.log(dom);
  			dom.style.top = parseInt(Math.random()*(this.state.constants.yRange[1]-this.state.constants.yRange[0]+1),10) + 'px';
  			dom.style.left = parseInt(Math.random()*(this.state.constants.xRange[1]-this.state.constants.xRange[0]+1),10) + 'px';
  		}
  	}
  	
}

AppComponent.defaultProps = {};

export default AppComponent;
