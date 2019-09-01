import React, { Component } from 'react';
import Pokecard from './Pokecard.js';
import './Pokedex.scss';

const imageSourceURLBeginning = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokedex extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<div className="Pokedex">
					{this.props.data.map((data) => (
						<Pokecard
							name={data.name}
							image={`${imageSourceURLBeginning + data.id}.png`}
							type={data.type}
							experience={data.base_experience}
						/>
					))}
				</div>
				{this.props.isWinner ? (
					<h2 className="Pokedex__result Pokedex__result--winner">This hand wins!</h2>
				) : (
					<h2 className="Pokedex__result Pokedex__result--loser">This hand loses!</h2>
				)}
			</div>
		);
	}
}

export default Pokedex;
