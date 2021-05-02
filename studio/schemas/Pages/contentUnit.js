import { MdShortText } from 'react-icons/md';
import supportedLanguages from "../locale/supportedLanguages";


export default {
    name: 'contentUnit',
    title: 'Content Unit',
    type: 'object',
    icon: MdShortText,
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
    ]
  }