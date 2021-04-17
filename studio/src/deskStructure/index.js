import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import ads from "./ads";
import categories from "./categories";
import person from "./person";

import siteSettings from "./siteSettings";

import TotebagPreview from "../components/previews/banners/swag/TotebagPreview";
import ShirtPreview from "../components/previews/banners/swag/ShirtPreview";
import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    "category",
    "person",
    "sampleProject",
    "vendor",
    "siteSettings",
    "ad",
    "page",
    "product",
    "route",
    "siteConfig",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("PAFM Web Editor")
    .items([
      S.documentTypeListItem("vendor").title("Vendors"),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
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
