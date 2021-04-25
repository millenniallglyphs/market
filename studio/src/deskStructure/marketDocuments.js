import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
  .title("Market documents")
  .schemaType("marketDocPage")
  .child(
    S.document()
        .title('Market Documents')
        .schemaType('marketDocPage')
        .documentId('marketDocPage')
    );