require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
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
  render() {
  	
  	let controllerUnits = [],
  		imgFigures = [];
  		 		
  	imgDatas.forEach((value)=>{
  		imgFigures.push(<ImgFigure data={value}/>);
  	});

    return (
		<section className="stage">
			<section className="img-sec">
				{imgFigures}
			</section>
			<nav className="controller-nav">
				{controllerUnits}
			</nav>
		</section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
