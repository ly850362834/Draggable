<template>
  <div>
    <layout></layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import layout from "@/views/layout/layout.vue";

@Options({
  components: {
    layout
  },
})
export default class About extends Vue {

}
</script>
