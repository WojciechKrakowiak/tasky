import { IStore } from './types';

const initialState: IStore = {
  tasks: [
    {
      title: 'Ideas',
      id: 'c1',
      items: [
        {
          title: 'Item title 1',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't1',
          isDragging: false,
        },
      ],
    },
    {
      title: 'Todos',
      id: 'c2',
      items: [
        {
          title: 'Item title 1',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't2',
          isDragging: false,
        },
      ],
    },
    {
      title: 'In progress',
      id: 'c3',
      items: [
        {
          title: 'Item title 2',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't3',
          isDragging: false,
        },
        {
          title: 'Item title 3',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't4',
          isDragging: false,
        },
        {
          title: 'Item title 4',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't5',
          isDragging: false,
        },
      ],
    },
    {
      title: 'In verification',
      id: 'c4',
      items: [
        {
          title: 'Item title 2',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't6',
          isDragging: false,
        },
        {
          title: 'Item title 3',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't7',
          isDragging: false,
        },
        {
          title: 'Item title 4',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't8',
          isDragging: false,
        },
      ],
    },
    {
      title: 'Done',
      id: 'c5',
      items: [
        {
          title: 'Item title 2',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't9',
          isDragging: false,
        },
        {
          title: 'Item title 3',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't10',
          isDragging: false,
        },
        {
          title: 'Item title 4',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum',
                },
              ],
            },
          ],
          id: 't11',
          isDragging: false,
        },
      ],
    },
  ],
  isTaskDragging: false,
  draggingTaskId: '',
};

export default initialState;
