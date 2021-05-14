import { MdInfoOutline } from 'react-icons/md';

export default {
    name: 'about',
    title: 'About',
    type: 'object',
    icon: MdInfoOutline,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'localeString'
      },
      {
        name: 'description',
        title: 'About the PAFM',
        type: 'localeText'
      },
      {
        name: "faqs",
        type: "array",
        title: "Add FAQ Item",
        of: [
          {
          type: 'reference',
          to: { type: "faq" }
          }
        ],
      },
    ]
  }