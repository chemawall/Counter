import React from "react";
import ReactDOM from "react-dom";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

//create your first component
const Home = (props) => {
	return (
		<div className="container" >
			<div className="row py-5">
			<div className="col-xl-2 mx-3 py-5 tamano border border-5 border-warning rounded-3"><i className="far fa-clock"></i></div>
			<div className="col-xl-2 mx-3 py-5 tamano border border-5 border-warning rounded-3">{props.thousands % 10}</div>
			<div className="col-xl-2 mx-3 py-5 tamano border border-5 border-warning rounded-3">{props.hundreds % 10}</div>
			<div className="col-xl-2 mx-3 py-5 tamano border border-5 border-warning rounded-3">{props.tens % 10}</div>
			<div className="col-xl-2 mx-3 py-5 tamano border border-5 border-warning rounded-3">{props.unit % 10}</div>
				</div>
			
			
			
			
		</div>
	);
};



let counter = 0;

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);

	counter++;
	ReactDOM.render(
		<Home unit={one} tens={two} hundreds={three} thousands={four} />,
		document.querySelector("#app")
	);
}, 1000);

export default Home;