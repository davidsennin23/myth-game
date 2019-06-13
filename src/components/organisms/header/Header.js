import React from 'react';
import DisplayPanel from '../../molecules/display-panel/DisplayPanel'
import Display from '../../atoms/texts/Display';
import Button from '../../atoms/buttons/Button';
import game from '../../../model/GameApp';

const headerStyle = {
    width: "100%",
    height: "100px",
    backgroundColor: "#eee",
    borderBottom: "1px solid #ddd"
}

class Header extends React.Component {

    state = {points:0}

    componentDidMount() {
        game.getPlayer().getPoints().subscribe(this.updatePoints);
    }

    componentWillUnmount() {
        game.getPlayer().getPoints().unsubscribe(this.updatePoints);
    }

    updatePoints = (points) => this.setState({points})

    render() {
        const {points} = this.state;
        return (
            <div style={headerStyle}>
                <DisplayPanel>
                    <Display label="Pontuação">{points}</Display>
                    <Button onClick={game.getNewCard}>Get new card</Button>        
                </DisplayPanel>
                <DisplayPanel>
                    <Display label="Pontos necessários">1000</Display>
                </DisplayPanel>
            </div>    
        );
    }
}

export default Header;