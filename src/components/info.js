import React from 'react';
import { Link } from 'react-router-dom'

class Info extends React.Component {
    constructor(props){
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            pokemon: {}
        }
       
    }

    criarTipos(){
        const pokemon = this.state.pokemon;
        return pokemon.types.map((tipo) => {
            const typeName = tipo.type.name;
            return (
                <span className='type' key={pokemon.id + '-' + typeName}>
                    {typeName}
                </span>
            );
        });
    }

    listaHabilidades(){
        const pokemon = this.state.pokemon;
        return pokemon.abilities.map(habilidade => {
            const nomeHab = habilidade.ability.name;
            return (
                <span key={pokemon.id + '- ' + nomeHab} className='habilidade'>
                    {nomeHab}
                </span>
            );
        });
    }

    render(){
        const {pokemon, isLoaded} = this.state;

        if (!isLoaded) {
            return (
                <div className='info'> Carregando... </div>
            )
        } else {
            const imageID = `000${pokemon.id}`.slice(-3);
            const imageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageID}.png`
            return (
                <section className='info'>
                    <div className='cabecalho'>
                        {pokemon.name}
                    </div>
                
                    <div className='corpo'>
                        <div className='corpo-bloco'>
                            <img src={imageSRC} alt={pokemon.name} />
                        </div>
                        <div className='corpo-bloco'>
                            <p><strong>Height:</strong> {`${pokemon.height}m`}</p>
                            <p><strong>Weight:</strong> {`${pokemon.weight}kg`}</p>
                            <p><strong>Abilities:</strong> {this.listaHabilidades()}</p>
                            <strong>Types:</strong>
                            <div className='corpo-bloco-categoria'>
                                {this.criarTipos()}
                            </div>
                        </div>
                    </div>
                    <div className='rodape'>
                        <Link to='/'>Voltar</Link>
                    </div>
                </section>
                );
            }
        }

    componentDidMount(){
       fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
       .then(resultado => resultado.json())
       .then(resultadoJson => {
           this.setState({
               isLoaded: true,
               pokemon: resultadoJson
           });
       });
    }
}

export default Info;