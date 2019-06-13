import React from 'react';
import TableRow from '../../molecules/table/TableRow';
import Cell from '../../atoms/table/Cell';
import HeaderCell from '../../atoms/table/HeaderCell';
import game from '../../../model/GameApp';

export default class CardTable extends React.Component {

    state = {cards: []};

    componentDidMount() {
        let c = 
            game.getPlayer().getPlayerCards().map(playerCard => {
                let card = playerCard.getCard();
                let quantidade = playerCard.getQuantidade();
                return (
                    <TableRow>
                        <Cell>{card.getNome()}</Cell>
                        <Cell>{card.getDificuldade()}</Cell>
                        <Cell>{quantidade}</Cell>
                    </TableRow>
                )
            });
        this.setState({
            cards: this.state.cards.concat(c)
        });
        game.getPlayer().subscribeToCardSpawn(this.addNewCard);
    }

    addNewCard = (playerCard) => {
        let c = [];
        let card = playerCard.getCard();
        let quantidade = playerCard.getQuantidade();
        c.push(
            <TableRow key={card.getId()}>
                <Cell>{card.getNome()}</Cell>
                <Cell>{card.getDificuldade()}</Cell>
                <Cell>{quantidade}</Cell>
            </TableRow>
        );
        this.setState({
            cards: this.state.cards.concat(c)
        });
    }

    componentWillUnmount = () => {
        game.getPlayer().unsubscribeOfCardSpawn(this.addNewCard);
    }

    render() {

        return (
            <table>
                <thead>
                    <TableRow>
                        <HeaderCell>Nome</HeaderCell>
                        <HeaderCell>Dificuldade</HeaderCell>
                        <HeaderCell>Quantidade</HeaderCell>
                    </TableRow>
                </thead>
                <tbody>
                    {
                        this.state.cards
                    }
                </tbody>
            </table>
        );

    }

}