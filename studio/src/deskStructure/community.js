import { MdPeople } from 'react-icons/md';
import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
    .title('Community')
    .icon(MdPeople)
    .child(
    S.document()
        .title('By Laws')
        .schemaType('contentUnit')
        .documentId('contentUnit')
    )