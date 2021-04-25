import { MdShortText } from 'react-icons/md';

export default {
    name: 'contentUnit',
    title: 'Content Unit',
    type: 'document',
    icon: MdShortText,
    fields: [
      {
        name: 'headline',
        title: 'Headline',
        type: 'string'
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text'
      }
    ]
  }