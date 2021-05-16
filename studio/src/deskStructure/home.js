import { MdHome } from 'react-icons/md';
import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
    .title('Home')
    .icon(MdHome)
    .child(
    S.document()
        .title('Home')
        .schemaType('home')
        .documentId('home')
    )