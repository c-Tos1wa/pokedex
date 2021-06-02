import React from 'react';
import Card from './card'

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

    componentDidMount(){
        //Método GET
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(resultado => resultado.json()) //transformando em json
        .then(resultadoJson => {
            this.setState({ //mudando o estado
                isLoaded: true,
                pokemons: resultadoJson.results //pegando o valor da chave results do resultado transformado em JSON
            })
        })
    }
}

export default cardList;