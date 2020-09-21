<template>
    <div class="electric-wrap">
        <HeaderBar/>
        <FancySlider
            :slide-list="churchData.slideData"
        />
    </div>
</template>

<script>
    import HeaderBar from "@/themes/electric/components/HeaderBar";
    import FancySlider from "@/themes/electric/components/FancySlider";

    export default {
        name: "ElectricHome",
        data() {
            return {
                churchData: {
                    slideData: [
                        {
                            id: 0,
                            active: true,
                            title: 'Your Church Website, On Your Budget',
                            details: 'Hostly.ch is a free website for your church. If your church needs a website but doesn\'t have a large budget, this is the place for you.',
                            imgTag: `<img style="width: 100%" src="/dts_9.jpg"/>`
                        }, {
                            id: 1,
                            active: false,
                            title: 'Your Online Presence Starts Here',
                            details: 'Getting started with a website doesn\'t have to be difficult. Hostly.ch is a perfect place to start your online presence with professionalism and excellence.',
                            imgTag: `<img style="width: 100%" src="/dts_8.jpg"/>`
                        }
                    ]
                }
            }
        },
        components: {
            FancySlider,
            HeaderBar
        }
    }
</script>

<style scoped>

</style>