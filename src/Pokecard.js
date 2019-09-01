import React, { Component } from 'react';
import './Pokecard.scss';

class Pokecard extends Component {
	render() {
		const { name, image, type, experience } = this.props;

		return (
			<div className="Pokecard">
				<h1 className="Pokecard__title">{name}</h1>
				<img className="Pokecard__image" src={image} alt={name} />
				<p className="Pokecard__type">
					Type: {type}
					<br />
					EXP: {experience}
				</p>
			</div>
		);
	}
}

export default Pokecard;
