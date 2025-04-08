import { groq } from 'next-sanity'
import { imageQuery } from '../objects/image-query'

export const WorksQuery = groq`*[_type == "work" && defined(slug.current)][]`




export const WorkQuery = groq`
  *[_type == "work" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug": slug.current,
    thumbnail {
      ${imageQuery}
    },
    url,
    releaseDate,
    stack[] {
      title,
      type
    },
    credits[] {
      job,
      name
    },
    logo {
      ${imageQuery}
    },
    orientation,
    defaultImage {
      ${imageQuery}
    },
    sections[] {
      ...,
      _type == 'ctaBlock' => {
        ...,
        image {
          ${imageQuery}
        },
      },
      _type == 'columnBlock' => {
        ...,
        rows[] {
          ...,
          columns[] {
            ...,
            image {
              ${imageQuery}
            },
            video {
              ${imageQuery}
              poster {
                ${imageQuery}
              }
            },
            content[] {
              ... // Rich text or other fields in content
            }
          }
        }
      },
      _type == 'reviewBlock' => {
        ...,
        reviews[]-> {
          ...,
          image {
            ${imageQuery}
          },
        },
        titles
      },
      _type == 'priceBlock' => {
        ...,
        columns[] {
          ...,
          image {
            ${imageQuery}
          }
        }
      },
      _type == 'videoColumnArray' => {
        ...,
        columns[] {
          ...,
          video {
            ${imageQuery}
            poster {
              ${imageQuery}
            }
          },
        }
      },
      _type == 'videoBlock' => {
        ...,
        video {
          ${imageQuery}
          poster {
            ${imageQuery}
          }
        },
      },
      _type == 'textBlock' => {
        ...,
      }
    },
    seo {
      ...,
      shareGraphic {
        ${imageQuery}
      },
    }
  }
`