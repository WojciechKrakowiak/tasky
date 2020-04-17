import React, { ChangeEvent, Component, FormEvent } from 'react';
import Button from 'components/Button';
import { IoIosClose } from 'react-icons/io';
import Styled from './CardAddItem.styled';

import { IProps, IState } from './types';

const initialState = {
  isActive: false,
  itemTitle: '',
};

class CardAddItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = initialState;
  }

  closeAddItem = (): void => {
    this.setState(initialState);
  };

  escFunction = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.closeAddItem();
    }
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.escFunction);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.escFunction);
  }

  handleAddItem = (): void => {
    let title = this.state.itemTitle;
    if (title && title.length) {
      title = title.trim();
      this.props.addItem(title);
      this.closeAddItem();
    }
  };

  handleItemTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    let title = e.currentTarget.value;
    if (title.endsWith('\n')) {
      title = title.slice(0, -1);
      title = title.trim();
      this.setState({ itemTitle: title });
      if (title && title.length) {
        this.props.addItem(title);
        this.closeAddItem();
      }
      return;
    }
    this.setState({ itemTitle: title });
  };

  render() {
    const { itemTitle, isActive } = this.state;
    const { placeholder, buttonTitle, children } = this.props;
    return (
      <>
        {!isActive && <Styled.AddItem onClick={() => this.setState({ isActive: true })}>{children}</Styled.AddItem>}

        {isActive && (
          <Styled.Wrapper>
            <Styled.Textarea
              autoFocus
              placeholder={placeholder}
              value={itemTitle}
              onChange={(e) => this.handleItemTitleChange(e)}
            />
            <Button primary onClick={this.handleAddItem}>
              {buttonTitle}
            </Button>
            <Styled.CloseButton onClick={this.closeAddItem}>
              <IoIosClose />
            </Styled.CloseButton>
          </Styled.Wrapper>
        )}
      </>
    );
  }
}

export default CardAddItem;
