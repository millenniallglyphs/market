import { MdAttachMoney} from 'react-icons/md';
import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
    .title('Donate')
    .icon(MdAttachMoney)
    .child(
    S.document()
        .title('Donate')
        .schemaType('donate')
        .documentId('donate')
    )