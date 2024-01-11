<template>
    <div class="space-y-4 py-4 flex-col flex h-full bg-white shadow-sm border-r">
        <div class="px-3 py-2 flex-1">
            <NuxtLink class="flex items-center pl-3 mb-14" to="/">
                <div class="relative h-8 w-8 mr-4">
                    <h1>E-Serivce</h1>
                </div>
            </NuxtLink>
            <div class="space-y-1">
                <NuxtLink v-for="route in dashboardLinks" :key="route.link" :to="route.link"
                    class="text-sm group text-primary flex p-3 w-full justify-start font-medium cursor-pointer rounder-lg transition hover:bg-muted"
                    :class="{
                        'bg-muted': currentRoute.path === route.link,
                    }">
                    <div class="flex items-center flex-1">
                        <Icon :name="route.icon" :class="`h-5 w-5 ${route.color}`" />
                        {{ route.label }}
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentRoute = useRoute()

</script>

<style scoped></style>