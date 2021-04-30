import { MdChat } from 'react-icons/md'

export default {
    name: 'blogpost',
    title: 'Blog Post',
    type: 'document',
    icon: MdChat,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'localeString'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: "string"}],
        },
        {
            name: 'featuredimg',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
              }
        },
        {
            name: 'article',
            title: 'Article',
            type: 'localeBlockContent',
        }
    ]
}