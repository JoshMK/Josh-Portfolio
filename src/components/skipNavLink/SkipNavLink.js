import React, { Component } from "react";
import "./SkipNavLink.scss";

class SkipNavLink extends Component {
	render() {
		return (
			<a className="app__skipNavLink" href="#main">
				Skip to main content
			</a>
		);
	}
}

export default SkipNavLink;
