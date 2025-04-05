import { PresentationIcon } from '@sanity/icons'
import type { StructureBuilder } from 'sanity/structure'

const Work = (S: StructureBuilder) => {
  return S.listItem()
    .title('Work')
    .icon(PresentationIcon) // Attach the icon here
    .child(
      S.documentList()
        .title('Work')
        .menuItems(S.documentTypeList('work').getMenuItems())
        .filter('_type == "work"')
        .defaultOrdering([{ field: '_createdAt', direction: 'desc' }]),
    )
}

export default Work