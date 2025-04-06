import { SeoType } from '../components/seo-type'
import { SocialType } from '../components/social-type'

export type SiteType = {
	title: string
	altTitle: string
	foundingYear: string
  addressLocality: string
	addressCountry: string
  addressRegion: string
  email: string
	social: SocialType
	seo: SeoType
}