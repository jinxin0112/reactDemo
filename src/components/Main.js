require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import imageDatas from '../data/imageDatas';

//利用自执行函数获取图片信息
let imgDatas = ((imgArr)=>{
	for(let i=0;i<imgArr.length;i++){
		let singleImageData = imgArr[i];
		singleImageData.imgUrl = require('../images/'+imgArr[i].fileName);
		imgArr[i] = singleImageData;
	}
	return imgArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
		<section className="stage">
			<section className="img-sec">
			</section>
			<nav className="controller-nav">
			</nav>
		</section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
