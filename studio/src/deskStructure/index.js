import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
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
import { MdVideoLabel } from 'react-icons/md';

import EditIcon from "part:@sanity/base/edit-icon";
// Hide document types that we already have a structure definition for

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
                .schemaType("cta")
                .child(
                  S.documentTypeList("cta")
                    .title("Call To Action")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("cta")
                        .views([S.view.form().icon(EditIcon)])
                    )
                ),
                S.listItem()
                .title('Hero')
                .icon(MdVideoLabel)
                .schemaType("hero")
                .child(
                  S.documentTypeList("hero")
                    .title("hero")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("hero")
                        .views([S.view.form().icon(EditIcon)])
                    )
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

