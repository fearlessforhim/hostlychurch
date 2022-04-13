<template>
<div className="home-page-cards">
  <HomeCard
    icon="fa-dollar-sign"
    title="No budget, No problem!"
    text="Hosting at BigCChurch.com is supported by donations. If your church is able to support the site contact the owner at jonathancameron6@pm.me"
  />
  <HomeCard
    icon="fa-fill"
    title="Choose your theme"
    text="No church is like yours. Choose from multiple themes to match the life of your community!"
  />
  <HomeCard
    icon="fa-newspaper"
    title="Church information. Here."
    text="People want to know about your church! Help them find, contact, and join you!"
  />
</div>
</template>

<script>
import HomeCard from './HomeCard';
export default {
  name: "HomeCards",
  components: {
    HomeCard
  }
}
</script>

<style scoped lang="scss">
.home-page-cards {
  display: flex;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #EEE;

  > div {
    flex: 1;

    & + div {
      margin-left: 30px;
    }
  }
}
</style>
