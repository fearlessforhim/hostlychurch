<template>
    <div class="header-wrap">
        <div class="header-title" @click="this.$emit('setLocation', 'home')">
            {{churchName}}
        </div>
        <div class="header-links">
            <div class="header-link" @click="this.$emit('setLocation', 'home')">Home</div>
            <div class="header-link" @click="this.$emit('setLocation', 'believe')">What We Believe</div>
            <div class="header-link" @click="this.$emit('setLocation', 'staff')">Staff</div>
        </div>
        <div class="contact-link-wrap">
            <a href="mailto:jonathancameron6@pm.me"><div class="contact-link">Contact</div></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
        props: {
          churchName: {
            type: String,
            required: true
          }
        }
    }
</script>

<style scoped lang="scss">
    $header-bg: #2c3e50;
    .header-wrap {
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

            a:link { text-decoration: none; }

            a:visited { text-decoration: none; }

            a:hover { text-decoration: none; }

            a:active { text-decoration: none; }

            .contact-link {
                border-radius: 4px;
                background: orange;
                color: white;
                text-decoration: none;
                &:hover {
                    background: darken($contact-btn-color, 5    );
                }
            }
        }
    }

</style>
