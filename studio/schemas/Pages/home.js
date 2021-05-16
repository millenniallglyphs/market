import { MdHome } from 'react-icons/md';

export default {
    name: 'home',
    title: 'Home',
    type: 'object',
    icon: MdHome,
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
        name: "heros",
        type: "array",
        title: "Add the featured Hero",
        of: [
          {
          type: 'reference',
          to: { type: "hero" }
          }
        ],
      },
    ]
  }