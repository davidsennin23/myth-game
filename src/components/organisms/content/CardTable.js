import React from 'react';
import TableRow from '../../molecules/table/TableRow';
import Cell from '../../atoms/table/Cell';
import HeaderCell from '../../atoms/table/HeaderCell';
import game from '../../../model/GameApp';

const tableStyle = {
    border: "1px solid #999"
}

export default class CardTable extends React.Component {

    state = {cards: []};

    cards = {};

    componentDidMount() {
        game
            .getPlayer()
            .getPlayerCards()
            .forEach(playerCards => this._addNewCard(playerCards));
        this.setState({
            cards: Object.values(this.cards)
        });
        game.getPlayer().subscribeToCardSpawn(this.addNewCard);
    }

    _createRow = (card, quantidade) => {
        return (
            <TableRow key={card.getId()}>
                <Cell>{card.getNome()}</Cell>
                <Cell>{card.getDificuldade()}</Cell>
                <Cell>{quantidade}</Cell>
            </TableRow>
        );
    }

    _addNewCard = (playerCard) => {
        let card = playerCard.getCard();
        let quantidade = playerCard.getQuantidade();
        let id = card.getId();
        this.cards[id] = this._createRow(card, quantidade);
    }

    addNewCard = (playerCard) => {
        this._addNewCard(playerCard);
        this.setState({
            cards: Object.values(this.cards)
        });
    }

    componentWillUnmount = () => {
        game.getPlayer().unsubscribeOfCardSpawn(this.addNewCard);
    }

    render() {

        return (
            <table style={tableStyle}>
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