<template>
	<div id="container">dir</div>
</template>

<script lang="ts">
	export default {};
</script>
<style lang="scss" scoped>
	#container {
		display: flex;
		position: absolute;
		right: 0;
		background: rgba($color: #111, $alpha: 0.1);
		height: 100%;
		width: 10vw;
		z-index: 30;
		backdrop-filter: blur(2px);
	}
</style>
