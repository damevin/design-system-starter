<script setup lang="ts">
import { buttonStyle } from './PButton.recipe'
import { type Sizes} from '../../types/sizes.types'
import { type Colors } from '../../types/colors.types'

type PButtonVariant = 'cta' | 'cta-alpha' | 'secondary'| 'tertiary'

interface PButtonProps {
  color: Colors
  size: Sizes
  variant: PButtonVariant
  /* IMO this should be slots instead of props!! */
  showIconLeft?: boolean
  showIconRight?: boolean
  iconRight?: string
  iconLeft?: string
  label?: string
}


const props = withDefaults(
  defineProps<PButtonProps>(),
  {
    color: 'primary',
    size: 'md',
    variant: 'cta',
    showIconLeft: false,
    showIconRight: false,
    iconRight: '',
    iconLeft: '',
    label: 'Do it'
  }
)
</script>

<template>
  <button 
    :class="buttonStyle({
      variant: props.variant,
      size: props.size
    })">
    <slot name="iconRight" />
    <slot default></slot>
    <slot name="iconLeft" />
  </button>
</template>
