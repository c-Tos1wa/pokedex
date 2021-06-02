import React from 'react';
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            pokemon: {}
        }
    }

    tipoCategorias(){
        const pokemon = this.state.pokemon;
        return pokemon.types.map(tipo => {
            const typeName = tipo.type.name;
            return (
                <div className={`card-category ${typeName}`} key={pokemon.id + '-' + typeName}>
                    <span>{typeName}</span>
                </div>
            )
        })
    }

    render(){
        const {pokemon, isLoaded} = this.state; 

        if (!isLoaded) {
            return (
                <div className='card'> Carregando... </div>
            )
        } else {
            const imageId = `000${pokemon.id}`.slice(-3);
            const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`;
            return (    
                <Link to={`/sobre/${pokemon.id}`}>
                    <div className='card'>
                        <img src={imgSrc} alt={pokemon.name} />
                        <div className='info'>
                            <p className='id'> No {pokemon.id} </p>
                        </div>
                        <h5>{pokemon.name}</h5>
                        {this.tipoCategorias()}
                    </div>
                </Link>
                );
            }
        }

        componentDidMount(){
            fetch(this.props.pokemon.url)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    pokemon: resultadoJson
                });
            })
        }
    }

export default Card;