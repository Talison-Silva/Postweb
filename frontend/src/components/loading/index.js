import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';

//não usado
//import ContentLoader from "react-content-loader"

import '../../styles/components/loading/styles.scss';
const Loading=(props)=>{
	return(
		<section className="loading" >
			<div className="boxs" >
				<div className="one" ></div>
				<div className="two" ></div>
				<div className="tree"></div>
			</div>
		</section>
	);
}

export default Loading;