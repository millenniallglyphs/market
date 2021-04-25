export default {
  widgets: [
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    },
    {
      name: 'document-list',
      options: {
        title: 'Vendors',
        query: '*[_type == "vendor"]',
        types: ['vendors']
      }
    },
    {
      name: 'vercel',
      layout: {
        width: 'full', // full width is recommended!
      }
    }
  ]
}
