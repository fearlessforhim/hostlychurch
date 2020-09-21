<template>
    <div v-bind:class="['fancy-slide-wrap', slideData.active ? 'active': '']">
<!--        <div class="img-container">-->
<!--            <img src="/dts_9.jpg"/>-->
<!--        </div>-->
        <div class="img-container" v-html="slideData.imgTag"></div>
        <div class="overlay">
            <div class="overlay-info">
                <div class="overlay-title">
                    {{slideData.title}}
                </div>
                <div class="overlay-separator">
                    <div class="left-line"></div>
                    <div class="line-cross">
                        <font-awesome-icon icon="cross"/>
                    </div>
                    <div class="right-line"></div>
                </div>
                <div class="overlay-details">
                    {{slideData.details}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FancySlide",
        props: {
            slideData: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    .fancy-slide-wrap {
        height: 0;
        overflow: hidden;
        position: relative;
        visibility: hidden;
        cursor: default;

        .img-container {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            img {
                width: 100%
            }
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #636363ba;
            z-index: 5;
            padding-top: 150px;

            .overlay-info {
                color: white;
                text-align: center;

                .overlay-title {
                    font-size: 55px;
                    width: 0;
                    transition: width 3s;
                    white-space: nowrap;
                    overflow: hidden;
                    margin: auto;
                }

                .overlay-separator {
                    width: 30%;
                    margin: auto;
                    display: flex;

                    .right-line, .left-line {
                        flex: 0;
                        border-top: 2px solid orange;
                        transition: flex 1s;
                    }

                    .line-cross {
                        flex: 2;
                        font-size: 15px;
                        color: orange;
                        margin-top: -8px;
                        opacity: 0;
                        transition: opacity 2s;
                    }
                }

                .overlay-details {
                    opacity: 0;
                    transition: opacity 3s;
                    font-size: 16px;
                }
            }
        }

        &.active {
            visibility: visible;
            height: 450px;
            .overlay .overlay-info {
                .overlay-title {
                    width: 100%;
                }
                .overlay-separator {
                    .left-line, .right-line {
                        flex: 9;
                    }
                    .line-cross {
                        opacity: 1;
                    }
                }
                .overlay-details {
                    opacity: 1;
                }
            }
        }
    }
</style>