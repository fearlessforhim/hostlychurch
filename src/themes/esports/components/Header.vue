<template>
    <div class="header-wrap">
        <div class="top-bar">
            <div class="contact-message">
                Get in touch today! 555.555.5555 | your@church.com
            </div>
        </div>
        <div class="header-bar">
            <div class="header-title">Hostly<span class="colored">.ch</span></div>
            <div class="header-link">Meet Jesus</div>
            <div class="header-link">Our Staff</div>
            <div class="header-link">Contact</div>
            <div class="header-link">Beliefs</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ESportsHeader"
    }
</script>

<style scoped lang="scss">
    .header-wrap {
        color: white;

        .top-bar {
            background: black;
            overflow: auto;
            padding: 10px 15px;
            font-size: 12px;

            .contact-message {
                float: left;
            }

            .social-icons {
                float: right;
            }
        }

        .header-bar {
            background: lighten(black, 10);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: stretch;

            .header-title {
                flex: 5;
                font-weight: bold;
                text-align: left;
                font-size: 50px;
                padding: 15px;
                cursor: pointer;

                .colored {
                    color: #a30001;
                }
            }
            .header-link {
                flex: 1;
                line-height: 98px;
                cursor: pointer;
                &:hover {
                    color: #a30001;
                }
            }
        }
    }
</style>
