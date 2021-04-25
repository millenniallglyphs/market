export default {
    name: "marketDoc",
    title: "Market Documents",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Document Name",
            type: "string",
        },
        {
            title: "Upload Document",
            name: "pafmDoc",
            type: "image",
            options: {
              hotspot: true,
            }
          }
    ]
}