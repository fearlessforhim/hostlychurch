<template>
    <div class="header-wrap">
        <div class="header-title">
            Hostly<span class="colored">.ch</span>
        </div>
        <div class="header-links">
            <div class="header-link">Home</div>
            <div class="header-link">Beliefs</div>
            <div class="header-link">Staff</div>
            <div class="header-link contact-link fa fa-phone"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped lang="scss">
    $header-bg: white;
    .header-wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: stretch;
        position: fixed;
        height: 80px;
        top: 0;
        left: 0;
        right: 0;
        background: $header-bg;
        color: black;
        z-index: 9;

        .header-title {
            flex: 6;
            font-size: 40px;
            font-weight: bold;
            padding-left: 20px;
            line-height: 80px;
            cursor: pointer;
            text-align: left;

            .colored {
                color: #A0CE4E;
            }
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
                flex: 2;
                text-align: center;
                border-top: 5px white solid;

                &.contact-link {
                    flex: 1;
                }

                &:hover {
                    border-top: 5px #A0CE4E solid;
                    color: #A0CE4E;
                    padding-top: -5px;
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
                    background: darken($contact-btn-color, 5);
                }
            }
        }
    }

</style>
