import React from 'react';
import Card from './card'

class cardList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: []
        };
    }

    listarPokemons(){
        const novosPokemons = [
            {
                'id': 1,
                "name": "Bulbasaur",
                "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            },

            {
                "id": 2,
                "name": "Ivysaur",
                "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            },
            
            {
                "id": 3,
                "name": "Venusaur",
                "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
            }

        ];

        this.setState({
            pokemons: novosPokemons
        });
    }

    criarPokemon(){
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon = {pokemon} key = {pokemon.id} />
        });
    }
    
    render(){
        return (
            <div>
                <div className = 'card-list'>
                    {this.criarPokemon()}
                </div>
                <button onClick={() => this.listarPokemons()}>
                    Listar Pokemons
                </button>
            </div>
        );
    }
}

export default cardList;