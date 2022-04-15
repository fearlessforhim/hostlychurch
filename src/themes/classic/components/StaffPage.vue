<template>
<div class="believe-wrap">
  <div class="believe-bullets">
    <div v-for="(b, idx) in staffBios" v-bind:key="idx" class="staff-bio-block">
      <div class="img-container" :style="{backgroundImage: `url('${b.imgUrl}')`}" />
      <div class="bio-info">
        <h1>{{b.fullName}}</h1>
        <p>
          {{b.bio}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "StaffPage",
  props: {
    staffBios: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.believe-wrap {
    min-height: 100%;
    padding: 30px 0;

    .believe-bullets {
        width: 40%;
        margin: auto;
        .staff-bio-block {
            display: flex;

            .img-container {
                background-position: center;
                background-size: cover;
                border-radius: 50%;
                width: 250px;
                height: 250px;
            }

            .bio-info {
                flex: 1;
                margin-left: 20px;

                p {
                    font-size: 20px;
                    border-top: 1px solid black;
                    padding-top: 25px;
                }
            }

            & + .staff-bio-block {
              margin-top: 50px;
            }
        }
    }
}
</style>
