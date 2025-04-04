'use client'
import { ReactNode } from 'react'

// blocks
import Hero from '@/components/hero'
import ShowcaseHero from '@/components/showcase-hero'
import ProductHero from '@/components/product-hero'
import TeamHero from '@/components/team-hero'
import IntegrationHero from '@/components/integration-hero'
import ImageBlock from '@/components/image-block'
import TextBlock from '@/components/text-block'
import VideoBlock from '@/components/video-block'
import CtaBlock from '@/components/cta-block'
import CtaBlock2 from '@/components/cta-block2'
import QuoteBlock from '@/components/quote-block'
import Quote from '@/components/quote'
import QuoteBlock2 from '@/components/quote2-block'
import ColumnGroup from '@/components/column-group'
import TextColumnGroup from '@/components/text-column-group'
import HeroGroup from '@/components/hero-group'
import HeroGroup2 from '@/components/hero-group2'
import AssessmentGroup from '@/components/assessment-group'
import PerkGroup from '@/components/perk-group'
import ValueGroup from '@/components/value-group'
import ResourceGroup from '@/components/resource-group'
import ProductCardGroup from '@/components/product-card-group'
import CardGroup from '@/components/card-group'
import LinkCardGroup from '@/components/link-card-group'
import CtaBar from '@/components/cta-bar'
import CtaQuote from '@/components/cta-quote'
import CityscapeCta from '@/components/cityscape-cta'
import CustomersRef from '@/components/customers-ref'
import CustomerRef2 from '@/components/customer-ref2'
import TechnologyRef from '@/components/technology-ref'
import IntegrationRef from '@/components/integration-ref'
import CareersRef from '@/components/careers-ref'
import ResourceRef from '@/components/resource-ref'
import ResourceBlock from '@/components/resource-block'
import StreamingRef from '@/components/streaming-ref'
import PodcastBlock from '@/components/podcast-block'
import NewsletterBlock from '@/components/newsletter-block'
import PressBlock from '@/components/press-block'
import MarketoForm from '@/components/marketo/form'
import FeatureGrouo from '@/components/feature-group'
import CtaButton from '@/components/cta-button'

interface BodySerializers {
	[key: string]: {
		component: React.FC<any>
		wrapper?: React.FC<{ children: ReactNode }>
		args?: any
	}
}

const bodySerializers: BodySerializers = {
	hero: {
		component: Hero,
		wrapper: ({ children }) => <>{children}</>,
	},
	showcaseHero: {
		component: ShowcaseHero,
		wrapper: ({ children }) => <>{children}</>,
	},
	productHero: {
		component: ProductHero,
		wrapper: ({ children }) => <>{children}</>,
	},
	teamHero: {
		component: TeamHero,
		wrapper: ({ children }) => <>{children}</>,
	},
	integrationHero: {
		component: IntegrationHero,
		wrapper: ({ children }) => <>{children}</>,
	},
	imageBlock: {
		component: ImageBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	textBlock: {
		component: TextBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	videoBlock: {
		component: VideoBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaBlock: {
		component: CtaBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaBlockTwo: {
		component: CtaBlock2,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaButton: {
		component: CtaButton,
		wrapper: ({ children }) => <>{children}</>,
	},
	quoteBlock: {
		component: QuoteBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	quoteTwo: {
		component: QuoteBlock2,
		wrapper: ({ children }) => <>{children}</>,
	},
	quote: {
		component: Quote,
		wrapper: ({ children }) => <>{children}</>,
	},
	columnGroup: {
		component: ColumnGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	textColumnGroup: {
		component: TextColumnGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	heroGroup: {
		component: HeroGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	heroGroupTwo: {
		component: HeroGroup2,
		wrapper: ({ children }) => <>{children}</>,
	},
	assessmentGroup: {
		component: AssessmentGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	perkGroup: {
		component: PerkGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	valueGroup: {
		component: ValueGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	resourceGroup: {
		component: ResourceGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	productCardGroup: {
		component: ProductCardGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	cardGroup: {
		component: CardGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	linkCardGroup: {
		component: LinkCardGroup,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaBar: {
		component: CtaBar,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaQuote: {
		component: CtaQuote,
		wrapper: ({ children }) => <>{children}</>,
	},
	cityscapeCta: {
		component: CityscapeCta,
		wrapper: ({ children }) => <>{children}</>,
	},
	customersRef: {
		component: CustomersRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	customersRefTwo: {
		component: CustomerRef2,
		wrapper: ({ children }) => <>{children}</>,
	},
	technologyRef: {
		component: TechnologyRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	integrationRef: {
		component: IntegrationRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	careersRef: {
		component: CareersRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	resourcesRef: {
		component: ResourceRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	resourcesBlock: {
		component: ResourceBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	streamingRef: {
		component: StreamingRef,
		wrapper: ({ children }) => <>{children}</>,
	},
	podcastBlock: {
		component: PodcastBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	newsletterBlock: {
		component: NewsletterBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	pressBlock: {
		component: PressBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	marketoForm: {
		component: MarketoForm,
		wrapper: ({ children }) => <>{children}</>,
	},
	featureGroup: {
		component: FeatureGrouo,
		wrapper: ({ children }) => <>{children}</>,
	},
}

function getSerializers() {
	const res: { [key: string]: React.FC<any> } = {}
	for (const [key, value] of Object.entries(bodySerializers)) {
		if (key === 'block') continue
		const Component = value.component
		res[key] = props => <Component {...props.node} />
	}
	return res
}

export const blockSerializers = getSerializers()

interface ComponentProps {
	body: {
		_key: string
		_type: string
	}[]
}

const Sections: React.FC<ComponentProps> = ({ body }) => {
	if (!body) return <></>
	return body.map((item, index) => {
		const type = item._type
		const serializer = bodySerializers[type]
		const Component = serializer?.component
		const args = serializer?.args
		const Wrapper = serializer?.wrapper

		if (!Component || !serializer)
			throw new Error(`No serializer implemented for body object: ${type}`)

		return Wrapper ? (
			<Wrapper key={item._key}>
				<Component {...item} {...args} componentIndex={index} />
			</Wrapper>
		) : (
			<Component key={item._key} {...item} {...args} componentIndex={index} />
		)
	})
}

export default Sections
