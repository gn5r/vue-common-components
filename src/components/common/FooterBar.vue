<template>
  <v-footer app :dark="dark" :color="color">
    <v-spacer v-if="spacer" />
    <div class="mr-2">&copy; {{copyright}}</div>
    <slot name="footer-bar-items" />
  </v-footer>
</template>

<script>
export default {
  name: "footer-bar",
  props: {
    copyright: String,
    color: {
      type: String,
      default: "primary",
    },
    dark: {
      type: Boolean,
      default: true,
    },
    spacer: {
      type: Boolean,
      default: true,
    },
  },
};
</script>