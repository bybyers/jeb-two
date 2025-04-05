import { UserIcon } from '@sanity/icons'
import type {StructureBuilder} from 'sanity/structure'

const About = (S: StructureBuilder) => {
  return S.listItem()
    .title('About')
    .icon(UserIcon)
    .child(S.editor().id('about').schemaType('about').documentId('about'))
}

export default About