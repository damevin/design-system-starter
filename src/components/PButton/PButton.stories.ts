import type { Meta, StoryObj } from '@storybook/vue3'
import PButton from './PButton.vue'
import { type Colors } from '../../types/colors.types'
import { type Sizes } from '../../types/sizes.types'
import { type PButtonVariant } from './PButton.types'

// Define the meta for the component
const meta = {
  title: 'Components/PButton',
  component: PButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'warning', 'danger', 'neutral-invert'],
      description: 'The color theme of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button'
    },
    variant: {
      control: 'select',
      options: ['cta', 'cta-alpha', 'secondary', 'tertiary'],
      description: 'The variant style of the button'
    },
    label: {
      control: 'text',
      description: 'The text content of the button'
    },
    showIconLeft: {
      control: 'boolean',
      description: 'Show an icon on the left side'
    },
    showIconRight: {
      control: 'boolean',
      description: 'Show an icon on the right side'
    },
    iconLeft: {
      control: 'text',
      description: 'Icon name for the left side'
    },
    iconRight: {
      control: 'text',
      description: 'Icon name for the right side'
    }
  }
} satisfies Meta<typeof PButton>

export default meta
type Story = StoryObj<typeof meta>

// Base story with default props
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'md',
    variant: 'cta',
    label: 'Click me'
  }
}

// Color variants
export const Primary: Story = {
  args: {
    ...Default.args,
    color: 'primary'
  }
}

export const Neutral: Story = {
  args: {
    ...Default.args,
    color: 'neutral'
  }
}

export const Success: Story = {
  args: {
    ...Default.args,
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    ...Default.args,
    color: 'warning'
  }
}

export const Danger: Story = {
  args: {
    ...Default.args,
    color: 'danger'
  }
}

export const NeutralInvert: Story = {
  args: {
    ...Default.args,
    color: 'neutral-invert'
  }
}

// Size variants
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  }
}

// Style variants
export const CTA: Story = {
  args: {
    ...Default.args,
    variant: 'cta'
  }
}

export const CTAAlpha: Story = {
  args: {
    ...Default.args,
    variant: 'cta-alpha'
  }
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
    ...Default.args,
    variant: 'tertiary'
  }
}

// With icons
export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    showIconLeft: true,
    iconLeft: 'arrow-left'
  }
}

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    showIconRight: true,
    iconRight: 'arrow-right'
  }
}

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    showIconLeft: true,
    showIconRight: true,
    iconLeft: 'arrow-left',
    iconRight: 'arrow-right'
  }
}
