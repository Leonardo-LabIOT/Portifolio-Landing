<template>
	<div id="container">
		<div class="inner">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores similique
			labore, incidunt dolorum nobis dicta quia quasi sint, laborum dolores sit quo
			asperiores, amet quibusdam ad minus unde cumque?
		</div>
	</div>
</template>
<script lang="ts">
	export default {};
</script>
<style lang="scss" scoped>
	#container {
		float: left;
		background: rgba(5, 55, 55, .5);
		// opacity: 0.3;
		height: 100%;
		width: 66vw;
		position: absolute;
		left: 0;
		z-index: 31;
		backdrop-filter: blur(2px);

	}
	.inner {
		width: 60%;
		height: 60%;
		font-size: 3rem;
		background-color: #0ff;
	}
</style>
