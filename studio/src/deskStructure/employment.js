import { MdPersonAdd } from 'react-icons/md';
import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
    .title('Employment')
    .icon(MdPersonAdd)
    .child(
    S.document()
        .title('Employment')
        .schemaType('employment')
        .documentId('employment')
    )