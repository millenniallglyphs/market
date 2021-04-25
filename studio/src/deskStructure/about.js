import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
  .title("About")
  .schemaType("about")
  .child(
    S.document()
        .title('About the market')
        .schemaType('about')
        .documentId('about')
    );