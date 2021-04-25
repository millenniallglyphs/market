import { MdInfoOutline } from 'react-icons/md';

export default {
    name: 'about',
    title: 'About',
    type: 'document',
    icon: MdInfoOutline,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'About the PAFM',
        type: 'text'
      },
      {
        name: "content",
        type: "array",
        title: "Add FAQ Item",
        of: [{ type: "faq" }],
      },
    ]
  }