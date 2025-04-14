<script setup lang="ts">
import { css } from '../styled-system/css';
import { flex } from '../styled-system/patterns'

import PButton from "./components/PButton/PButton.vue";
</script>

<template>
  <div :class="[flex({ direction: 'column', gap: 'space.2.5', justifyContent: 'center', alignItems: 'center' }), css({ height: '100vh' })]">
    <div :class="flex({ direction: 'row', gap: 'space.2.5' })">
      <PButton variant="cta" size="md" color="primary">
        CTA
      </PButton>
      <PButton variant="cta-alpha" size="md" color="primary">
        CTA-ALPHA
      </PButton>
      <PButton variant="secondary" size="md" color="primary">
        Just do it bro
      </PButton>
      <PButton variant="tertiary" size="md" color="primary">
        Just do it bro
      </PButton>
    </div>
    <div :class="flex({ direction: 'row', gap: 'space.2.5' })">
      <PButton variant="cta" size="md" color="success">
        CTA
      </PButton>
      <PButton variant="cta-alpha" size="md" color="success">
        CTA-ALPHA
      </PButton>
      <PButton variant="secondary" size="md" color="success">
        Just do it bro
      </PButton>
      <PButton variant="tertiary" size="md" color="success">
        Just do it bro
      </PButton>
    </div>
    <div :class="flex({ direction: 'row', gap: 'space.2.5' })">
      <PButton variant="cta" size="md" color="danger">
        CTA
      </PButton>
      <PButton variant="cta-alpha" size="md" color="danger">
        CTA-ALPHA
      </PButton>
      <PButton variant="secondary" size="md" color="danger">
        Just do it bro
      </PButton>
      <PButton variant="tertiary" size="md" color="danger">
        Just do it bro
      </PButton>
    </div>
    <div :class="flex({ direction: 'row', gap: 'space.2.5' })">
      <PButton variant="cta" size="md" color="warning">
        CTA
      </PButton>
      <PButton variant="cta-alpha" size="md" color="warning">
        CTA-ALPHA
      </PButton>
      <PButton variant="secondary" size="md" color="warning">
        Just do it bro
      </PButton>
      <PButton variant="tertiary" size="md" color="warning">
        Just do it bro
      </PButton>
    </div>
  </div>
</template>
