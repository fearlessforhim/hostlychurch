<template>
    <div class="header-wrap">
        <div class="header-title">
            Hostly<span class="colored">.ch</span>
        </div>
        <div class="header-links">
            <div class="header-link" @click="this.$emit('setLocation', 'home')">Home</div>
            <div class="header-link" @click="this.$emit('setLocation', 'believe')">Beliefs</div>
            <div class="header-link" @click="this.$emit('setLocation', 'staff')">Staff</div>
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
        height: 80px;
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

                &.contact-link {
                    flex: 1;
                }

                &:hover {
                    box-shadow: 0px 5px #A0CE4E inset;
                    color: #A0CE4E;
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
