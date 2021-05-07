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
            type: 'blockContent',
        }
    ]
}