<template>
    <div class="header-wrap">
        <div class="header-title">
            Hostly.ch
        </div>
        <div class="header-links">
            <div class="header-link">Home</div>
            <div class="header-link">What We Believe</div>
            <div class="header-link">Staff</div>
        </div>
        <div class="contact-link-wrap">
            <div class="contact-link">Contact</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped lang="scss">
    $header-bg: #2c3e50;
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
        color: white;
        z-index: 9;

        .header-title {
            flex: 6;
            font-size: 40px;
            font-weight: bold;
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