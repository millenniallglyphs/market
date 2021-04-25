import { MdShortText } from 'react-icons/md';

export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    icon: MdShortText,
    fields: [
      {
        name: 'headline',
        title: 'Headline',
        type: 'string'
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text'
      }
    ]
  }