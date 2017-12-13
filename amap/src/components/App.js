import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            veggies: {}
        }
        
        this.addVeggie = this.addVeggie.bind(this);
    }
    
    addVeggie(veggie) {
        //MAJ du state
        const veggies = {...this.state.veggies};
        // ajouter des produits
        const timestamp = Date.now();
        veggies[`veggie-${timestamp}`] = veggie;
        //appliquer le state
        this.setState({veggies});
    }
    
    render(){
        return (
            <div className="amap">
                <div className="menu">
                    <Header tagline ="Des bons taros pour les ien ien!!!"></Header>
            </div>
            <Order/>
            <Inventory addVeggie = {this.addVeggie} />
                </div>
        )
    }
}

export default App;