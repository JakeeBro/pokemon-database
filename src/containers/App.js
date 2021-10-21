import React, { Component } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import PokemonCardList from '../components/PokemonCardList'
import SearchBox from '../components/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: [],
			pokemonNames: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// let pokemonArray = {};
		// let pmNames = this.state.pokemonNames;

		// const urls = [
		// 	'https://pokeapi.co/api/v2/pokemon/1',
		// 	'https://pokeapi.co/api/v2/pokemon/4',
		// 	'https://pokeapi.co/api/v2/pokemon/7'
		// ]

		const urls = []

		for (let i = 1; i < 899; i++) {
			urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
			// console.log('urls2', urls);
		}

		Promise.all(urls.map(url => fetch(url)
			.then(pokemon => pokemon.json())
		))
			.catch(err => console.log('Error Fetching Pokemon'))
			.then(array => {
				// pokemonArray = array
				this.setState({pokemon: array})
				// console.log('TSP', this.state.pokemon)
				// pokemonArray.forEach(element => {
				// 	pmNames.push(element.name)
				// })
			})
			.catch(err => console.log('Error Setting Pokemon Array', err));
			// .then(console.log('statePokemon', this.state.pokemon))
			// .then(this.setState({pokemonNames: pmNames}))
			// .then(console.log(this.state.pokemonNames))
			// .catch(err => console.log('Error Setting Pokemon Names State', err));

		// fetch('https://pokeapi.co/api/v2/pokemon/1')
		// 	.then(response => response.json())
		// 	.then(response2 => pokemon_list.push(response2.name))
		// 	.then(response3 => {console.log("1" + pokemon_list)})

		// fetch('https://pokeapi.co/api/v2/pokemon/4')
		// 	.then(response => response.json())
		// 	.then(response2 => pokemon_list.push(response2.name))
		// 	.then(response3 => {console.log("2" + pokemon_list)})

		// fetch('https://pokeapi.co/api/v2/pokemon/7')
		// 	.then(response => response.json())
		// 	.then(response2 => pokemon_list.push(response2.name))
		// 	.then(response3 => {console.log("3" + pokemon_list)})

		// this.setState({pokemon: pokemon_list});
		// console.log("4" + this.state.pokemon)
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const { pokemon, searchfield } = this.state;
		const filteredPokemon = pokemon.filter(pm => {
			return pm.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !pokemon.length ? 
		<h1 className='white ttu tc f1 p2'>GETTING POKEMON DATA</h1> : 
		(
			// <div className='tc'>
			// 	<h1>POKEMON DATABASE</h1>
			// </div>
			<div className='tc'>
				<div className=''>
					<h1 className='f1 white dib bg-red br3 ma2 pa3'>POKEMON DATABASE</h1>
				</div>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<PokemonCardList pokemon={filteredPokemon}/>
				</Scroll>
			</div>
		)
	}
}

export default App;