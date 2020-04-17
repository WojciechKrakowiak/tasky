import React, { Component } from 'react';
import { Draggable, resetServerContext } from 'react-beautiful-dnd';

import { IoMdCreate } from 'react-icons/io';
import { IProps, IState } from './types';
import Styled from './CardItem.styled';

class CardItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isHover: false,
      isEditing: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const { id, index, title } = this.props;
    const { isHover, isEditing } = this.state;
    resetServerContext();
    return (
      <Draggable draggableId={id} index={index}>
        {(provided: any, snapshot: any) => (
          <Styled.Wrapper
            isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Styled.Link to={`/showTask/${id}`}>
              <Styled.Item
                isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <Styled.Title>{title}</Styled.Title>
                {(isHover || isEditing) && (
                  <Styled.Icon>
                    <IoMdCreate />
                  </Styled.Icon>
                )}
              </Styled.Item>
            </Styled.Link>
          </Styled.Wrapper>
        )}
      </Draggable>
    );
  }
}

export default CardItem;
