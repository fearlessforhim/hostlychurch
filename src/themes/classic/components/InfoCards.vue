<template>
    <div class="info-card-wrap">
        <InfoCard
                icon="fa-phone"
                title="Contact Information"
                text="Provide your contact information for visitors"
        />
        <InfoCard
                icon="fa-home"
                title="Location"
                :text="`${churchInfo.address.street} ${churchInfo.address.cityState}`"
        />
        <InfoCard
                icon="fa-clock"
                title="Service Times"
                :text="churchInfo.serviceTimes.join(', ')"
        />
    </div>
</template>

<script>
    import InfoCard from "@/themes/classic/components/InfoCard";

    export default {
        name: "InfoCards",
        components: {InfoCard},
        props: {
          churchInfo: {
            type: Object,
            required: true
          }
        }
    }
</script>

<style scoped lang="scss">
    .info-card-wrap {
        width: 100%;
        display: flex;
        margin-top: 50px;
        padding: 10px;
        box-sizing: border-box;
    }
</style>
