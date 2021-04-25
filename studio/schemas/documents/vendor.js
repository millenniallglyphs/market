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
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "parents",
      title: "Parent categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "vendor" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
