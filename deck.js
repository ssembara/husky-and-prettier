
import { slides as title } from './slides/01_title.mdx'
import { slides as introduction } from './slides/02_introduction.mdx'
import { slides as content_1 } from './slides/03_content_1.mdx'
import { slides as content_2 } from "./slides/04_content_2.mdx";
import { slides as content_3 } from "./slides/05_content_3.mdx";
import { slides as closing } from "./slides/06_closing.mdx";

// import `slides` from your mdx files and spread into `slides` export
// theme export for code-surfer
export { duotoneDark as theme } from 'code-surfer'

// theme exports for mdx-deck since `theme` is used by code-surfer
export const themes = []

// Spread your slides here...
export const slides = [...title, ...introduction, ...content_1, ...content_2, ...content_3]