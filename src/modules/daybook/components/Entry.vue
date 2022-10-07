<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params: {id: 10}})"
    >
        <!-- Título  -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">06</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="mx-2 fw-light">2022, Jueves</span>
        </div>

        <div class="entry-description">
            Esse officia enim anim voluptate et quis laborum ipsum. Laborum consectetur duis aliquip duis excepteur. Et minim commodo anim velit deserunt. Non pariatur eiusmod mollit reprehenderit non laboris. Veniam sunt occaecat officia aliqua commodo et officia dolore nisi proident magna officia adipisicing. In in occaecat anim nisi.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}


</style>