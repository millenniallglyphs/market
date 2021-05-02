import { MdInsertDriveFile } from 'react-icons/md';

export default {
    name: 'marketDocPage',
    title: 'Market Documents',
    type: 'object',
    icon: MdInsertDriveFile,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'localeString'
      },
      {
        name: 'description',
        title: 'Text',
        type: 'localeText'
      },
      {
        name: "content",
        type: "array",
        title: "Add a Document",
        of: [{ type: "marketDoc" }],
      },
    ]
  }