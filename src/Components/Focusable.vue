<template>
  <div id="this" ref="initialFocus">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      firstElement: this.$refs.initialFocus as HTMLElement,
    };
  },
  mounted() {
    this.setFirstElement();
  },
  methods: {
    setFirstElement() {
      console.log("typerr");
      if (this.$refs.initialFocus) {
        const aux = <HTMLElement>this.$refs.initialFocus;
        this.firstElement = aux?.children[0] as HTMLElement;
        console.log(this.firstElement);
        setTimeout(() => {
          if (this.firstElement) this.firstElement.focus();
        }, 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#this {
  line-height: 30px;
  background: cyan;

  & {
    :nth-child(n) {
      border: 1px solid black;
    }

    :hover {
      cursor: pointer;
    }

    :nth-child(4n + 1) {
      color: white;
      background: green;
    }

    :focus {
      transition: opacity 1s ease-in;
      opacity: 1;
      background: red;
    }

    // :not(:focus) {
    // 	transition: opacity 1s;
    // 	opacity: 0;
    // }
  }
}</style>
