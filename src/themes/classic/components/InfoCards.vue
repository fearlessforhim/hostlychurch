<template>
    <div class="info-card-wrap">
        <InfoCard
                icon="phone"
                title="Contact Information"
                text="Provide your contact information for visitors"
        />
        <InfoCard
                icon="home"
                title="Location"
                text="Have your address easily visible"
        />
        <InfoCard
                icon="clock"
                title="Service Times"
                text="Visitors will want to quickly find when you meet"
        />
    </div>
</template>

<script>
    import InfoCard from "@/themes/classic/components/InfoCard";

    export default {
        name: "InfoCards",
        components: {InfoCard}
    }
</script>

<style scoped lang="scss">
    .info-card-wrap {
        width: 100%;
        display: flex;
        padding-top: 50px;
    }
</style>