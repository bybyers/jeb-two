import { HomeIcon } from '@sanity/icons'
import type {StructureBuilder} from 'sanity/structure'

const Home = (S: StructureBuilder) => {
  return S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .child(S.editor().id('home').schemaType('home').documentId('home'))
}

export default Home