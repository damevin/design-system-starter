import { defineSemanticTokens } from '@pandacss/dev'

export const semantic = defineSemanticTokens.colors({
  surface: {
    neutral: {
      /* TOBEDEFINED */
    },
    primary: {
      100: {
        value: { 
          base: '{colors.brand.300}', 
          _dark: '{colors.brand.900}' 
        }
      },
      200: {
        value: { 
          base: '{colors.brand.200}', 
          _dark: '{colors.brand.800}' 
        }
      },
      300: {
        value: { 
          base: '{colors.brand.100}', 
          _dark: '{colors.brand.700}' 
        }
      },
      bgAlpha: {
        value: {
          base: '{colors.brand.alphaDark800}',
          _dark: '{colors.brand.alphaLight900}'
        }
      },
      alpha100: {
        value: {
          base: '{colors.brand.alphaDark100}',
          _dark: '{colors.brand.alphaLight200}'
        }
      },
      alpha200: {
        value: {
          base: '{colors.brand.alphaDark200}',
          _dark: '{colors.brand.alphaLight300}'
        }
      },
      alpha300: {
        value: {
          base: '{colors.brand.alphaDark300}',
          _dark: '{colors.brand.alphaLight400}'
        }
      }
    },
  },
  action: {
    primary: {
      pressedOverlay: {
        value: {
          base: '{colors.brand.alphaDark200}',
          _dark: '{colors.brand.alphaLight300}'
        }
      },
      hoverOverlay: {
        value: {
          base: '{colors.brand.alphaDark100}',
          _dark: '{colors.brand.alphaLight200}'
        }
      },
      activeOverlay: {
        value: {
          base: '{colors.brand.alphaDark300}',
          _dark: '{colors.brand.400}'
        }
      },
      idle: {
        value: {
          base: '{colors.brand.600}',
          _dark: '{colors.brand.400}'
        }
      },
      idleAlphaStrong: {
        value: {
          base: '{colors.brand.alphaDark700}',
          _dark: '{colors.brand.alphaLight800}'
        }
      },
      idleAlphaLight: {
        value: {
          base: '{colors.brand.alphaDark100}',
          _dark: '{colors.brand.alphaLight200}'
        }
      }

    },
    neutralComplementary: {
      pressedOverlay: {
        value: {
          base: '{colors.neutral.alphaLight300}',
          _dark: '{colors.neutral.alphaDark200}'
        }
      },
      hoverOverlay: {
        value: {
          base: '{colors.neutral.alphaLight200}',
          _dark: '{colors.neutral.alphaDark100}'
        }
      },
      activeOverlay: {
        value: {
          base: '{colors.neutral.alphaLight400}',
          _dark: '{colors.neutral.alphaDark300}'
        }
      },
      idle: {
        value: {
          base: '{colors.neutral.100}',
          _dark: '{colors.neutral.900}'
        }
      },
      idleAlphaStrong: {
        value: {
          base: '{colors.neutral.alphaLight700}',
          _dark: '{colors.neutral.alphaDark700}'
        }
      },
      idleAlphaLight: {
        value: {
          base: '{colors.neutral.alphaLight200}',
          _dark: '{colors.neutral.alphaDark100}'
        }
      }
    }
  }
})
