import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    
    goToStore(event) {
        // On récupère le texte entré dans le formulaire 
        event.preventDefault();
        const storeId = this.storeInput.value;
        console.log(`On va vers ${storeId}`);
        
        //Ensuite on vas se déplacer
        this.props.history.push(`store/${storeId}`);
    }
    render(){
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2> Entrez un nom de magasin</h2>
                <input type ="text" ref={(input) => { this.storeInput = input}} required placeholder="Nom du magasin" defaultValue={getFunName()}/>
                <button type="submit"> visiter le magasin </button>
            </form>   
        )
    }
}

 StorePicker.contextTypes = {
        router: PropTypes.object
}
export default StorePicker;