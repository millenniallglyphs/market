import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";

export default S.listItem()
  .title("Vendors")
  .schemaType("vendor")
  .child(
    S.documentTypeList("vendor")
      .title("Vendors")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("vendor")
          .views([S.view.form().icon(EditIcon)])
      )
  );