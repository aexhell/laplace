import {
   defineConfig, presetAttributify, presetIcons,
   presetTypography, presetUno, transformerDirectives,
   transformerVariantGroup
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
   rules: [
      ['transform-matrix', { transform: 'matrix3d(0.9, 0.2, 0.5, 0, 0, 1, -0.1, 0, 0, 0, 0.1, 0, 0, 0, 0, 1.3)' }]
    ],
   shortcuts: [
      // ...
   ],
   theme: {
      colors: {
         black: '#181818'
      }
   },
   presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
         provider: 'fontshare',
         fonts: {
            sans: 'Inter',
            mono: ['Fira Code', 'Fira Mono:400,700'],
         },
      }),
   ],
   transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
   ],
})