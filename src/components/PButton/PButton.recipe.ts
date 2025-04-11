import { cva } from '../../../styled-system/css'
 
export const buttonStyle = cva({
  /* base style common for all variants */
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '{radii.md}',
    /* this should be a token too */
    transition: 'background-color 0.2s ease-in-out'
  },
  variants: {
    variant: {
      'cta': {},
      'cta-alpha': {},
      'cta-outlined': {},
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
    }
  },

  /* default are set here */
  defaultVariants: {
    variant: 'cta',
    size: 'md'
  },

  /* See this https://panda-css.com/docs/concepts/recipes#compound-variants */
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg'],
      variant: 'cta',
      css: {
        color: '{colors.action.neutralComplementary.idle}',
        backgroundColor: '{colors.action.primary.idle}',
        /* We can manager states directly here */
        /* State hover */
        _hover: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        },
        /* State active */
        _active: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        },
        /* State disabled */
        _disabled: {
          backgroundColor: '{colors.action.primary.idleAlphaStrong}',
        }
      }
    },
  ]
})
