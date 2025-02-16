<template>
    <div style="display: inline-flex;" class="mb-10 div-card">
        <v-img class="card-img" :height="200" :width="200" :src="imgSrc"></v-img>
        <v-card class="rounded-xl ma-0" :width="1040"
            style="padding-left: 100px; padding-top: 30px; padding-bottom: 30px;" rounded>
            <p class="text-h6 font-weight-bold">
                {{ rede.speaker }}
            </p>
            <p class="text-h7 text-disabled">
                {{ rede.date }}
            </p>
            <p class="text-h7 font-weight-bold mt-4">
                Parlameter-Analyse:
            </p>
            <p class="text-h7 font-weight-bold">
                Redner:innen war dem Thema eher {{ rede.sentiment }}.
            </p>
            <p class="text-h7 mt-4 multiline">
                {{ rede.summary }}
            </p>
            <p class="text-h7 mt-4 multiline">
                <a :href="rede.urllink" target="_blank">Hier klicken für die ganze Rede.</a>
            </p>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ErgebnisCard",
    data() {
        return {

        }
    },
    props: {
        rede: {
            type: Object,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.div-card {
    margin-left: -50px;
}

.card-img {
    position: relative;
    left: 80px;
    top: 30px;
    z-index: 1;
}
</style>