<template>
    <div class="chip-card-container">
        <slot />
    </div>
</template>
<style scoped lang="scss">
$color1: rgba(0, 0, 0, 1);
$color1: var(--bg2);

.chip-card-container {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: $color1 dashed 5px;
    background: var(--c1);
}
</style>