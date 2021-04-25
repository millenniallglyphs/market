export default {
    name: 'about',
    title: 'About',
    type: 'document',
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
        title: "Add Vendor",
        of: [{ type: "vendor" }],
      },
    ]
  }