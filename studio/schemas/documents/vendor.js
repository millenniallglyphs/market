import { MdStoreMallDirectory } from "react-icons/md"

export default {
  name: "vendor",
  title: "Vendor",
  type: "document",
  icon: MdStoreMallDirectory,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "logo",
      title: "logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Contacts',
      name: 'contacts',
      type: 'array',
      of: [{type: 'contact'}]
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
