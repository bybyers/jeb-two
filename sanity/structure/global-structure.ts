import { EarthAmericasIcon } from '@sanity/icons'
import type {StructureBuilder} from 'sanity/structure'

const Global = (S: StructureBuilder) => {
  return S.listItem()
    .title('Site Settings')
    .icon(EarthAmericasIcon)
    .child(S.editor().id('site').schemaType('site').documentId('site'))
}

export default Global