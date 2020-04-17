import React, { FunctionComponent, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Styled from './Modal.styled';
import { IProps } from './types';

const Modal: FunctionComponent<IProps> = ({ HeaderIcon, task, updateTask }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [contentValue, setContentValue] = useState(task.content);

  const [contentState, setContentState] = useState({
    isEditing: true,
  });

  return (
    <>
      <Styled.Wrapper>
        <Link to="/">
          <Styled.CloseButton>
            <IoIosClose />
          </Styled.CloseButton>
        </Link>
        <Styled.Header>
          <Styled.HeaderIcon>
            <HeaderIcon />
          </Styled.HeaderIcon>
          <Styled.Title>{task.title}</Styled.Title>
          <Styled.Subtitle>
            In
            {task.cardTitle}
          </Styled.Subtitle>
        </Styled.Header>
        <Styled.Content>
          {!contentState.isEditing && (
            <div
              onClick={() =>
                setContentState({
                  isEditing: true,
                })
              }
            >
              <Slate editor={editor} value={contentValue} onChange={(value) => setContentValue(value)}>
                <Editable />
              </Slate>
            </div>
          )}
          {contentState.isEditing && (
            <Styled.EditorWrapper>
              <Styled.Editor>
                <Slate editor={editor} value={contentValue} onChange={(value) => setContentValue(value)}>
                  <Editable />
                </Slate>
              </Styled.Editor>
              <Button
                primary
                onClick={() => {
                  updateTask(task.id, contentValue);
                }}
              >
                Save
              </Button>{' '}
              <Button
                onClick={() => {
                  setContentValue(task.content);
                  setContentState({ isEditing: false });
                }}
              >
                Cancel
              </Button>
            </Styled.EditorWrapper>
          )}
        </Styled.Content>
      </Styled.Wrapper>
      <Styled.Overlay />
    </>
  );
};

Modal.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
  }).isRequired,
  updateTask: PropTypes.func.isRequired,
  HeaderIcon: PropTypes.string.isRequired,
};

export default Modal;
