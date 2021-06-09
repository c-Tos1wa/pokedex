import React from 'react';

class BuscarCaixa extends React.Component {
    render() {
        return (
            <div className='search-box'>
                <input type='text' className='search-box__input'
                    placeholder={this.props.placeholder}
                    onChange={this.props.funcaoBuscar} />
            </div>
        );
    }
}

export default BuscarCaixa;