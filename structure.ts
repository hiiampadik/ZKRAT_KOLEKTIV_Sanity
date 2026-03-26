import type {StructureResolver} from 'sanity/structure'
import {InfoOutlineIcon, ProjectsIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About')
        .icon(InfoOutlineIcon)
        .child(S.document().schemaType('about').documentId('about').title('About')),

      S.divider(),

      S.listItem()
        .title('Projects')
        .icon(ProjectsIcon)
        .child(S.documentTypeList('project').title('Projects')),
    ])
