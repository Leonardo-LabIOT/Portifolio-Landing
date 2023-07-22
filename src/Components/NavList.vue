<template>
    <div id="nav-list">
        <!-- importa as rotas e renderiza depende de @media -->
        <div v-for="item in routes" :key="item.name">
            {{ item.name }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    computed: {
        routes() {
            return this.$router.options.routes.filter(r => r.name === 'Page').flatMap(r => r.children || r);
        }
    }
}
</script>
<style lang="scss" scoped>
#nav-list {
    background: #f00;
}
</style>