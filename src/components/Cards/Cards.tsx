import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Styled from './Cards.styled';
import Card from './Card';
import CardItem from './CardItem';
import CardsAddCard from './CardsAddCard';
import { IProps, IState } from './types';

class Cards extends Component<IProps, IState> {
  onDragEnd = (result: any) => {
    const { draggableId, source, destination } = result;
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }

    switch (draggableId[0]) {
      case 't':
        this.props.moveItem(
          draggableId,
          { cardId: source.droppableId, index: source.index },
          { cardId: destination.droppableId, index: destination.index },
        );
        break;
      case 'c':
        this.props.moveCard(draggableId, source.index, destination.index);
        break;
    }
  };

  render() {
    return (
      <Styled.Wrapper>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Styled.CardsWrapper>
            <Droppable droppableId="cards" type="CARD" direction="horizontal">
              {(provided: any, snapshot: any) => (
                <Styled.CardsWrapper ref={provided.innerRef} {...provided.draggableProps}>
                  {this.props.cardsData.map(({ title, id, items }, index) => (
                    <Card title={title} key={id} id={id} index={index}>
                      {items.map(({ title, content, id }, index) => (
                        <CardItem key={id} id={id} index={index} title={title} content={content} />
                      ))}
                    </Card>
                  ))}

                  {provided.placeholder}
                </Styled.CardsWrapper>
              )}
            </Droppable>
            <CardsAddCard />
          </Styled.CardsWrapper>
        </DragDropContext>
      </Styled.Wrapper>
    );
  }
}

export default Cards;
