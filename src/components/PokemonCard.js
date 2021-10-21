import React from 'react';

const PokemonCard = ({ id, name, base_experience, type, hp, attack, defense, specialAttack, specialDefense, speed}) => {
	return (
		//className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'
		<div className='bg-red w-20 dib pv1 ph3 ma4 grow br3 shadow-5'>
			<div className='white'>
				<h2 className='black ttu bg-white br3'>{name}</h2>
				<img className='w-30' alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
				<h2 className='tc ttc i'>{type}</h2>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>HP</p>
					<p className='b'>{hp}</p>
				</div>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>Attack</p>
					<p className='b'>{attack}</p>
				</div>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>Defense</p>
					<p className='b'>{defense}</p>
				</div>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>Special Attack</p>
					<p className='b'>{specialAttack}</p>
				</div>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>Special Defense</p>
					<p className='b'>{specialDefense}</p>
				</div>
				<div className='flex justify-between bg-black br3 ma1 ph4'>
					<p className='b'>Speed</p>
					<p className='b'>{speed}</p>
				</div>
				<p className='tc b i'>{id}</p>
			</div>
		</div>
	)
}

export default PokemonCard;