import { groq } from 'next-sanity'
import { imageQuery } from '../objects/image-query'

export const PagesQuery = groq`*[_type == "page" && defined(slug.current)][]`


export const PageQuery = groq`
   *[_type == "page" && slug.current == $slug][0]
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    content[] {
      ... // Rich text or other fields in content
    }
    heroImage {
      ${imageQuery}
    },
    heroText[] {
      ... // Rich text or other fields in content
    }
    clientList,
    servicesList,
    seo {
      ...,
      shareGraphic {
        ${imageQuery}
      },
    },
    sections[] {
      ...,
      _type == 'textBlock' => {
        ...,
      }
    }
  }
`