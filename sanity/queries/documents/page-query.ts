import { groq } from 'next-sanity'
import { imageQuery } from '../objects/image-query'

export const PagesQuery = groq`*[_type == "page" && defined(slug.current)][]`


export const HomeQuery = groq`
  *[_type == "home"][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    content[] {
      ...
    },
    heroImage {
      ${imageQuery}
    },
    heroText[] {
      ...
    },
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
        ...
      }
    }
  }
`

export const AboutQuery = groq`
  *[_type == "about"][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    content[] {
      ...
    },
    heroImage {
      ${imageQuery}
    },
    heroText[] {
      ...
    },
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
        ...
      }
    }
  }
`