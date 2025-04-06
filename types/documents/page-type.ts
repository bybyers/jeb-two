import { SeoType } from '../components/seo-type'
import { PageBuilderType } from '../components/page-builder-type'
import { SimpleTextType } from '../objects/simple-text-type'
import { DefaultImageType } from '../objects/default-img-type'

export type PageType = {
	_id: string
	_createdAt: Date
	_updatedAt: Date
	title: string
	slug: string
  heroImage?: DefaultImageType
  heroText?: SimpleTextType
  content?: SimpleTextType
  clientList?: string[]
  servicesList?: string[]
	sections?: PageBuilderType
	seo: SeoType
}
