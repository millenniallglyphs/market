import { MdStoreMallDirectory } from 'react-icons/md';

export default {
    name: 'vendors',
    title: 'Vendors',
    type: 'object',
    icon: MdStoreMallDirectory,
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
        name: "content",
        type: "array",
        title: "Add FAQ Item",
        of: [
          {
          type: 'reference',
          to: { type: "vendor" }
          }
        ],
      },
    ]
  }