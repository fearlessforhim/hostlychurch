<template>
    <div class="footer-wrap">
        <div class="service-times">
          <div v-for="(s) in serviceTimes" :key="s">
            {{s}}
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
        props: {
          serviceTimes: {
            type: Array,
            required: true
          }
        }
    }
</script>

<style scoped lang="scss">
    $header-bg: #2c3e50;
    .footer-wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: stretch;
        height: 80px;
        background: $header-bg;
        color: white;
        z-index: 9;

        .header-title {
            flex: 6;
            font-size: 40px;
            padding-left: 20px;
            line-height: 80px;
            cursor: pointer;
            text-align: left;
        }

        .header-links {
            flex: 4;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: stretch;

            .header-link {
                cursor: pointer;
                line-height: 80px;
                flex: 1;
                text-align: center;
                &:hover {
                    background: darken($header-bg, 10)
                }
            }
        }

        $contact-btn-color: orange;

        .contact-link-wrap {
            cursor: pointer;
            line-height: 30px;
            flex: 1;
            padding: 24px 10px;
            text-align: center;
            .contact-link {
                border-radius: 4px;
                background: orange;
                &:hover {
                    background: darken($contact-btn-color, 5    );
                }
            }
        }
    }

</style>
