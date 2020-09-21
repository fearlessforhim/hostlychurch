<template>
    <div class="slider-wrap">
        <div class="slider-select">
            <div class="left-arrow">
                <font-awesome-icon
                        icon="chevron-left"
                        @click="previousSlide"
                />
            </div>
            <div
                    class="right-arrow"
                    @click="nextSlide"
            >
                <font-awesome-icon icon="chevron-right"/>
            </div>
        </div>
        <FancySlide
                v-for="(s) in slideList"
                :key="s.id"
                :slide-data="s"
        />
    </div>
</template>

<script>
    import FancySlide from "@/themes/electric/components/FancySlide";

    export default {
        name: "FancySlider",
        components: {FancySlide},
        props: {
            slideList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        },
        mounted() {
            setInterval(() => this.nextSlide(), 10000)
        },
        methods: {
            nextSlide() {
                let currentActive = this.slideList.filter((s) => s.active)[0];
                currentActive.active = false;
                let currentActiveId = currentActive.id;
                let nextActiveId = currentActiveId + 1;
                if(nextActiveId >= this.slideList.length){
                    nextActiveId = 0;
                }
                this.slideList.filter((s) => s.id === nextActiveId)[0].active = true;
            },
            previousSlide() {
                let currentActive = this.slideList.filter((s) => s.active)[0];
                currentActive.active = false;
                let currentActiveId = currentActive.id;
                let nextActiveId = currentActiveId - 1;
                if(nextActiveId < 0){
                    nextActiveId = this.slideList.length - 1;
                }
                this.slideList.filter((s) => s.id === nextActiveId)[0].active = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .slider-wrap {
        height: 450px;

        .slider-select {
            position: relative;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;

            .left-arrow, .right-arrow {
                top: 0;
                bottom: 0;
                color: white;
                font-size: 40px;
                position: absolute;
                z-index: 8;
                line-height: 400px;
                padding: 0 20px;
                cursor: pointer;

                &:hover {
                    color: darken(white, 10);
                }
            }

            .left-arrow {
                left: 0;
            }

            .right-arrow {
                right: 0;
            }
        }
    }
</style>