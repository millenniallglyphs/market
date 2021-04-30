import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
  .title("Vendors")
  .schemaType("vendors")
  .child(
    S.document()
        .title('About the market')
        .schemaType('vendors')
        .documentId('vendors')
    );