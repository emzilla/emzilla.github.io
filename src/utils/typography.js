// http://kyleamathews.github.io/typography.js/
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.3,
  headerFontFamily: ['Fira Mono', 'Monaco', 'Courier', 'monospace'],
  bodyFontFamily: ['Muli', 'Arial', 'Helvetica', 'sans-serif'],
  bodyWeight: '100',
  googleFonts: [
    {
      name: 'Fira Mono',
      styles: ['700'],
    },
    {
      name: 'Muli',
      styles: ['100'],
    },
  ],
})

export default typography
