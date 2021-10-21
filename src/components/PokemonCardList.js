import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonCardList = ({pokemon}) => {
	const cardsArray = pokemon.map((pm, i) => {
		console.log('PCL PM', pm.id);
		// return (
		// 	<h1 key={i}>fucking motherfucker</h1>
		// )
		return (<PokemonCard
				key={i}
				id={pm.id}
				name={pm.name}
				base_experience={pm.base_experience}
				type={pm.types[0].type.name}
				hp={pm.stats[0].base_stat}
				attack={pm.stats[1].base_stat}
				defense={pm.stats[2].base_stat}
				specialAttack={pm.stats[3].base_stat}
				specialDefense={pm.stats[4].base_stat}
				speed={pm.stats[5].base_stat}
			/>);
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default PokemonCardList;