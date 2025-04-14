import { cva } from '../../../styled-system/css'
import type { RecipeVariantProps } from '../../../styled-system/css'

export const buttonStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '{radii.md}',
    transition: 'background-color 0.2s ease-in-out'
  },
  variants: {
    variant: {
      'cta': {},
      'cta-alpha': {},
      secondary: {},
      tertiary: {},
    },
    size: {
      sm: {
        paddingX: '{spacing.space.2.5}',
        fontSize: '{fontSizes.action.button.sm}',
        height: '{sizes.height.sm}',
      },
      md: {
        paddingX: '{spacing.space.4}',
        fontSize: '{fontSizes.action.button.md}',
        height: '{sizes.height.md}',
      },
      lg: {
        paddingX: '{spacing.space.6}',
        fontSize: '{fontSizes.action.button.lg}',
        height: '{sizes.height.lg}',
      }
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      warning: {},
      danger: {},
      'neutral-invert': {}
    }
  },
  defaultVariants: {
    variant: 'cta',
    size: 'md',
    color: 'primary'
  },
  compoundVariants: [
    // CTA Primary
    {
      variant: 'cta',
      color: 'primary',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.primary.idle}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.primary.idle}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        }
      }
    },
    // CTA Neutral
    {
      variant: 'cta',
      color: 'neutral',
      css: {
        color: '{colors.action.neutral.idle}',
        backgroundColor: '{colors.action.neutral.idle}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.neutral.idle}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutral.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.neutral.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.neutral.idleAlphaStrong}',
        }
      }
    },
    // CTA Success
    {
      variant: 'cta',
      color: 'success',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.success.idle}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.success.idle}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.success.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.success.idleAlphaStrong}',
        }
      }
    },
    // CTA Warning
    {
      variant: 'cta',
      color: 'warning',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.warning.idle}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.warning.idle}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
        }
      }
    },
    // CTA Danger
    {
      variant: 'cta',
      color: 'danger',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.danger.idle}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.danger.idle}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
        }
      }
    },
    // CTA Alpha Primary
    {
      variant: 'cta-alpha',
      color: 'primary',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.primary.pressedOverlay}',
            pointerEvents: 'none'
          }
        },
        _disabled: {
          backgroundColor: '{colors.action.primary.idleAlphaLight}',
        }
      }
    },
    // CTA Alpha Success
    {
      variant: 'cta-alpha',
      color: 'success',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.success.idleAlphaStrong}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.success.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.success.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutral.pressedOverlay}',
            pointerEvents: 'none'
          }
        },
        _disabled: {
          backgroundColor: '{colors.action.success.idleAlphaLight}',
        }
      }
    },
    // CTA Alpha Danger
    {
      variant: 'cta-alpha',
      color: 'danger',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.danger.idleAlphaStrong}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.pressedOverlay}',
            pointerEvents: 'none'
          }
        },
        _disabled: {
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.idle}',
            pointerEvents: 'none'
          }
        }
      }
    },
    // CTA Alpha Warning
    {
      variant: 'cta-alpha',
      color: 'warning',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.warning.idleAlphaStrong}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.pressedOverlay}',
            pointerEvents: 'none'
          }
        },
        _disabled: {
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutralComplementary.idle}',
            pointerEvents: 'none'
          }
        }
      }
    },
    // CTA Alpha Neutral
    {
      variant: 'cta-alpha',
      color: 'neutral',
      css: {
        color: '{colors.action.neutral.idle}',
        backgroundColor: '{colors.action.neutral.idleAlphaLight}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.neutral.idleAlphaLight}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutral.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.neutral.idleAlphaStrong}',
        },
        _disabled: {
          backgroundColor: '{colors.action.neutral.idleAlphaLight}',
        }
      }
    },
    // Secondary Primary
    {
      variant: 'secondary',
      color: 'primary',
      css: {
        color: '{colors.action.primary.idle}',
        backgroundColor: '{colors.action.primary.idleAlphaLight}',
        _hover: {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.primary.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.primary.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.primary.idleAlphaLight}',
        }
      }
    },
    // Secondary Neutral
    {
      variant: 'secondary',
      color: 'neutral',
      css: {
        color: '{colors.action.neutral.idle}',
        backgroundColor: '{colors.action.neutral.idleAlphaLight}',
        _hover: {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.neutral.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.neutral.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.neutral.idleAlphaLight}',
        }
      }
    },
    // Secondary Success
    {
      variant: 'secondary',
      color: 'success',
      css: {
        color: '{colors.action.success.idle}',
        backgroundColor: '{colors.action.success.idleAlphaLight}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.success.idleAlphaLight}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.success.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.success.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.success.idleAlphaLight}',
        }
      }
    },
    // Secondary Warning
    {
      variant: 'secondary',
      color: 'warning',
      css: {
        color: '{colors.action.warning.idle}',
        backgroundColor: '{colors.action.warning.idleAlphaLight}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.warning.idleAlphaLight}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.warning.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.warning.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.warning.idleAlphaLight}',
        }
      }
    },
    // Secondary Danger
    {
      variant: 'secondary',
      color: 'danger',
      css: {
        color: '{colors.action.danger.idle}',
        backgroundColor: '{colors.action.danger.idleAlphaLight}',
        _hover: {
          position: 'relative',
          backgroundColor: '{colors.action.danger.idleAlphaLight}',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            right: 0,
            bottom: 0,
            backgroundColor: '{colors.action.danger.hoverOverlay}',
            pointerEvents: 'none'
          }
        },
        _active: {
          backgroundColor: '{colors.action.danger.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.danger.idleAlphaLight}',
        }
      }
    },
    // Tertiary Primary
    {
      variant: 'tertiary',
      color: 'primary',
      css: {
        color: '{colors.action.primary.idle}',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: '{colors.action.primary.hoverOverlay}',
        },
        _active: {
          backgroundColor: '{colors.action.primary.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        }
      }
    },
    // Tertiary Neutral
    {
      variant: 'tertiary',
      color: 'neutral',
      css: {
        color: '{colors.action.neutral.idle}',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: '{colors.action.neutral.hoverOverlay}',
        },
        _active: {
          backgroundColor: '{colors.action.neutral.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.neutral.idleAlphaStrong}',
        }
      }
    },
    // Tertiary Success
    {
      variant: 'tertiary',
      color: 'success',
      css: {
        color: '{colors.action.success.idle}',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: '{colors.action.success.hoverOverlay}',
        },
        _active: {
          backgroundColor: '{colors.action.success.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.success.idleAlphaStrong}',
        }
      }
    },
    // Tertiary Warning
    {
      variant: 'tertiary',
      color: 'warning',
      css: {
        color: '{colors.action.warning.idle}',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: '{colors.action.warning.hoverOverlay}',
        },
        _active: {
          backgroundColor: '{colors.action.warning.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.warning.idleAlphaStrong}',
        }
      }
    },
    // Tertiary Danger
    {
      variant: 'tertiary',
      color: 'danger',
      css: {
        color: '{colors.action.danger.idle}',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: '{colors.action.danger.hoverOverlay}',
        },
        _active: {
          backgroundColor: '{colors.action.danger.pressedOverlay}',
        },
        _disabled: {
          backgroundColor: '{colors.action.danger.idleAlphaStrong}',
        }
      }
    }
  ]
})

export type ButtonStyleProps = RecipeVariantProps<typeof buttonStyle>
