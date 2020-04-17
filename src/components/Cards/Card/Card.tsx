import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { IoIosAdd } from 'react-icons/io';
import { IProps } from './types';
import CardAddItem from '../CardAddItem';
import CardTitle from '../CardTitle';
import Styled from './Card.styled';

const handleItemDrop = () => {
  console.log('DROP');
};

class Card extends Component<IProps> {
  render() {
    const { title, id, children, index } = this.props;

    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          // eslint-disable-next-line @typescript-eslint/unbound-method
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Styled.Wrapper onDrop={handleItemDrop} isDragging={snapshot.isDragging && !snapshot.isDropAnimating}>
              <CardTitle title={title} cardId={id} />
              <Droppable droppableId={id} type="CARDITEM">
                {(provided, snapshot) => (
                  // eslint-disable-next-line @typescript-eslint/unbound-method
                  <Styled.ItemsWrapper ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                  </Styled.ItemsWrapper>
                )}
              </Droppable>
              <CardAddItem cardId={id} placeholder="Name your task..." buttonTitle="Add task">
                <IoIosAdd />
              </CardAddItem>
            </Styled.Wrapper>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Card;
