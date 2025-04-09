import { PortableTextBlock } from 'sanity';

export type TextBlockType = {
  _key: string;
  _type: string;
  active: boolean;
  componentIndex: number;
  content: {
    text: PortableTextBlock[];
  }
};