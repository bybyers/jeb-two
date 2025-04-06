import { PageType } from '../documents/page-type'

export type RouteType = {
	navKind: 'route'
	title: string
	_key: string
	_type: string
	pageRoute?: PageType
	route: string
	link: string
	blank: boolean
}
