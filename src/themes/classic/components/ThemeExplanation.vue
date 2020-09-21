<template>
    <div class="theme-description">
        <div class="theme-text">
            Choose from a variety of themes
        </div>
        <div class="theme-details">
            Your church is as unique as your congregation. Choose a site theme that matches your vision and
            demographics!
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThemeExplanation"
    }
</script>

<style scoped lang="scss">
    .theme-description {
        padding-top: 50px;
        width: 50%;
        margin: auto;
        color: #444444;

        .theme-text {
            font-size: 55px;
            text-align: center;
        }

        .theme-details {
            padding-top: 30px;
            font-size: 20px;
        }
    }
</style>