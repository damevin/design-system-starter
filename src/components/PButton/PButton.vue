<script setup lang="ts">
import { buttonStyle } from './PButton.recipe'
/* refactor this.. */
import { type Sizes } from '../../types/sizes.types'
import { type Colors } from '../../types/colors.types'
import { type PButtonVariant } from './PButton.types'


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
  /*  */
  dataTestId?: string
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
  :data-testid="dataTestId" 
  :class="buttonStyle({
    variant: props.variant,
    size: props.size,
    color: props.color
  })">
    <slot name="iconRight" />
    <slot v-if="$slots.default" default></slot>
    <span v-else>{{ label }}</span>
    <slot name="iconLeft" />
  </button>
</template>
