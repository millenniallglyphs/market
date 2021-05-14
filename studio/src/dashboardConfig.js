export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Vendors',
        types: ['vendor'],
        createButtonText: 'Onboard Vendor',
      },
      layout: {
        width: 'medium', 
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited',
        order: '_updatedAt desc',
        limit: 4
      },
      layout: {
        width: 'medium', 
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Blog Posts',
        types: ['blogpost'],
        createButtonText: 'Create new blog post',
      },
      layout: {
        width: 'full', 
      }
    },
    {
      name: 'vercel',
      layout: {
        width: 'full', 
      }
    },
    {
      name: 'project-info',
      layout: {
        width: 'medium', 
      }
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium', 
      }
    }
  ]
}
