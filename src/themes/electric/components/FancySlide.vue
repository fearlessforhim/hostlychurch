<template>
<div v-bind:class="['fancy-slide-wrap', active ? 'active': '']">
  <div class="img-container"
    :style="{backgroundImage: `url('${slideData.imgUrl}')`}"
  />
  <div class="overlay">
            <div class="overlay-info">
                <div class="overlay-title">
                    {{slideData.title}}
                </div>
                <div class="overlay-separator">
                    <div class="left-line"></div>
                    <div class="line-cross fa fa-cross"/>
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
    },
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.fancy-slide-wrap {
    height: 0;
    overflow: hidden;
    position: relative;
    display: none;
    cursor: default;
    height: 100%;

    .img-container {
        background-position: center;
        background-size: cover;
        height: 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(99,99,99, .6);
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

                .left-line,
                .right-line {
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
                margin-top: 20px;
            }
        }
    }

    &.active {
        display: block;
        .overlay .overlay-info {
            .overlay-title {
                width: 100%;
            }
            .overlay-separator {
                .left-line,
                .right-line {
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
