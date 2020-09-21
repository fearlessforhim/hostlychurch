<template>
    <div class="classic-wrap">
        <HeaderBar/>
        <div class="page-content">
            <HeroHeader/>
            <ThemeExplanation/>
            <InfoCards/>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "@/themes/classic/components/HeaderBar";
    import HeroHeader from "@/themes/classic/components/HeroHeader";
    import ThemeExplanation from "@/themes/classic/components/ThemeExplanation";
    import InfoCards from "@/themes/classic/components/InfoCards";

    export default {
        name: "ClassicHome",
        components: {InfoCards, ThemeExplanation, HeroHeader, HeaderBar}
    }
</script>

<style scoped lang="scss">
    .classic-wrap {
        font-family: "Roboto Slab", Arial, Helvetica, sans-serif;
    }
</style>