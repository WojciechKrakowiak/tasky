import React, { Component } from 'react';
import Styled from './CardTitle.styled';
import { IProps, IState } from './types';

class CardTitle extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { title } = this.props;

    this.state = {
      isEditActive: !title.length,
      titleInputValue: title,
    };
  }

  handleInputChange = (e: any) => {
    this.setState({ titleInputValue: e.target.value });
  };

  handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      const { updateCard } = this.props;
      const { titleInputValue } = this.state;
      const newTitle = titleInputValue.trim();
      if (newTitle.length) {
        updateCard(newTitle);
        this.setState({
          isEditActive: false,
          titleInputValue: newTitle,
        });
      }
    }
  };

  render() {
    const { title } = this.props;
    const { isEditActive, titleInputValue } = this.state;
    return (
      <>
        {!isEditActive && <Styled.Title onClick={() => this.setState({ isEditActive: true })}>{title}</Styled.Title>}
        {isEditActive && (
          <Styled.Input
            autoFocus
            value={titleInputValue}
            placeholder="Name your card..."
            onChange={(e) => this.handleInputChange(e)}
            onKeyPress={(e: any) => this.handleKeyPress(e)}
          />
        )}
      </>
    );
  }
}

export default CardTitle;
