import React from 'react';
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: {}
        }
    }

    render(){
        const pokemon = this.state.pokemon; 

        return (
            <Link to={`/sobre/${pokemon.id}`}>
                <div className='card'>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <div className='info'>
                        <p className='id'> No {pokemon.id} </p>
                    </div>
                    <h5>{pokemon.name}</h5>
                </div>
            </Link>
            );
        }

        componentDidMount(){
            this.setState({
                pokemon: this.props.pokemon //este atributo veio do cardList
            })
        }
    }

export default Card;