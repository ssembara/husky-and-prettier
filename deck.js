// import global stylesheet

import { slides as title } from './slides/01-title.mdx'
import { slides as introduction } from './slides/02.introduction.mdx'

// import `slides` from your mdx files and spread into `slides` export
// theme export for code-surfer
export { duotoneDark as theme } from 'code-surfer'

// theme exports for mdx-deck since `theme` is used by code-surfer
export const themes = [""]

// Spread your slides here...
export const slides = [...title, ...introduction]