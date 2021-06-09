import React from 'react';
import Card from './card';
import BuscarCaixa from './search'

class cardList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            pokemons: []
        };
    }

    criarPokemon(){
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon = {pokemon} key = {pokemon.name} />
        });
    }

    buscarPokemons(evento) {
        const valor = evento.target.value.toLowerCase();
        const pokemon = this.state.pokemonsFiltrados;
        const pokemonsBuscados = pokemon.filter((pokemon) => pokemon.name.includes(valor))
        this.setState ({
            pokemons: pokemonsBuscados 
        });
    }
    
    render(){
        const isLoaded = this.state.isLoaded;

        //condição no carregamento da página
        if (!isLoaded) {
            return (
                <div className='card-list'> Carregando... </div>
            )
        } else {
            return (
                <div>
                    <div className='search-box'>
                        <BuscarCaixa placeholder='Buscar pokemons...' funcaoBuscar={(evento) => this.buscarPokemons(evento)}/>
                    </div>
                    <div className = 'card-list'>
                        {this.criarPokemon()}
                    </div>
                    <button onClick={() => this.listarPokemons()}>
                        Listar Mais Pokemons
                    </button>
                </div>
                );
            }
    }

    componentDidMount(){
        //Método GET
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(resultado => resultado.json()) 
        .then(resultadoJson => {
            this.setState({ 
                isLoaded: true,
                pokemons: resultadoJson.results,
                pokemonsFiltrados: resultadoJson.results
            })
        })
    }
}

export default cardList;