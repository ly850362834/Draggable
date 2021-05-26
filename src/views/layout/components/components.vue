<template>
  <div>
    components
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { basicsComponent } from "@/json/components/basics-components/index.ts"

@Options({
  components: {

  },
})
export default class Components extends Vue {
  created(){
    // class Input extends BasicsComponent{
    //   constructor(name: string) {
    //     super(name)
    //   }
    // }
    console.log(basicsComponent.basicsComponentJson)
  }
}
</script>
