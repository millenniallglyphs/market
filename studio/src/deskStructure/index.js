import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import ads from "./ads";
import categories from "./categories";
import person from "./person";
import vendor from "./vendor";
import about from "./about";
import community from "./community";
import marketDocuments from "./marketDocuments";
import donate from "./donate";
import employment from "./employment";
import home from "./home";
import vendors from "./vendorPage";

import { MdMouse } from 'react-icons/md';
import { MdPublic } from 'react-icons/md';
import { MdChromeReaderMode } from 'react-icons/md';

import EditIcon from "part:@sanity/base/edit-icon";

import siteSettings from "./siteSettings";

import TotebagPreview from "../components/previews/banners/swag/TotebagPreview";
import ShirtPreview from "../components/previews/banners/swag/ShirtPreview";
import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    "category",
    "sampleProject",
    "vendor",
    "siteSettings",
    "ad",
    "page",
    "product",
    "route",
    "siteConfig",
    "contentUnit"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("PAFM Web Editor")
    .items([
      S.listItem()
        .title('Pages')
        .icon(MdChromeReaderMode)
        .child(
          S.list()
          .title('Pages')
          .items([
            home,
            about,
            vendors,
            community,
            marketDocuments,
            donate,
            employment,
          ])
        ),
      S.listItem()
          .title('Globals')
          .icon(MdPublic)
          .child(
            S.list()
            .title('Globals')
            .items ([
              vendor,
              S.listItem()
                .title('CTAs')
                .icon(MdMouse)
                .child(
                  S.list()
                  .title('Globals')
                  .items ([
                    S.documentTypeListItem('cta').title('CTAs')
                  ])
                )
            ])
          ),
      S.listItem()
        .title("Blog Posts")
        .schemaType("blogpost")
        .child(
          S.documentTypeList("blogpost")
            .title("Blog Posts")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType("blogpost")
                .views([S.view.form().icon(EditIcon)])
            )
        )
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "vendor") {
    return S.document().views([
      S.view.form(),
      S.view.component(ProductsOverviewPreview).title("Vendors Overview"),
      S.view.component(ProductPagePreview).title("Vendor Page"),
    ]);
  }
  return S.document().views([S.view.form()]);
};
