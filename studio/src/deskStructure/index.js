import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import ads from "./ads";
import categories from "./categories";
import person from "./person";
import vendor from "./vendor"

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
    "about",
    "contentUnit"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("PAFM Web Editor")
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
          .title('Pages')
          .items([
            S.listItem()
              .title('About')
              .child(
                S.list()
                .title('About')
                .items ([
                  S.listItem()
                  .title('About The Market')
                  .child(
                    S.document()
                      .title('About the market')
                      .schemaType('contentUnit')
                      .documentId('contentUnit')
                  )
                ])
              ),
            S.documentTypeListItem("vendor").title("Vendors"),
            S.listItem()
                .title('Community')
                .child(
                  S.document()
                      .title('By Laws')
                      .schemaType('contentUnit')
                      .documentId('contentUnit')
                ),
            S.listItem()
              .title('Market Documents')
              .child(
                S.list()
                .title('Market Documents')
                .items ([
                  S.documentTypeListItem("marketDoc").title("Market Documents")
                ])
              ),
            S.listItem()
                .title('Donate')
                .child(
                  S.document()
                      .title('Donate To the Market')
                      .schemaType('contentUnit')
                      .documentId('contentUnit')
                ),
            S.listItem()
                .title('Employment')
                .child(
                  S.document()
                      .title('Employment Listing')
                      .schemaType('contentUnit')
                      .documentId('contentUnit')
                ),
            vendor
          ])
        ),
      S.listItem()
          .title('Globals')
          .child(
            S.list()
            .title('Globals')
            .items ([
              S.documentTypeListItem('cta').title('CTAs')
            ])
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
