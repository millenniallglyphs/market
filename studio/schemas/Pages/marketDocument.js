import { MdInsertDriveFile } from 'react-icons/md';

export default {
    name: 'marketDocPage',
    title: 'Market Documents',
    type: 'document',
    icon: MdInsertDriveFile,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Text',
        type: 'text'
      },
      {
        name: "content",
        type: "array",
        title: "Add a Document",
        of: [{ type: "marketDoc" }],
      },
    ]
  }