<template>
    <v-autocomplete
        :model-value="modelValue"
        :items="countries"
        item-title="title"
        item-value="title"
        autocomplete="off"
        @update:model-value="onUpdate"
    >
        <template v-slot:item="{ item, props }">
            <v-list-item v-bind="props" :title="(item as unknown as CountryListItem).raw.title">
                <template v-slot:prepend>
                    <span class="country-select-flag me-2">{{ flagEmoji((item as unknown as CountryListItem).raw.code) }}</span>
                </template>
            </v-list-item>
        </template>
        <template v-slot:selection="{ item }">
            <span class="country-select-flag me-2">{{ flagEmoji((item as unknown as CountryListItem).raw.code) }}</span>
            {{ (item as unknown as CountryListItem).raw.title }}
        </template>
    </v-autocomplete>
</template>

<script setup lang="ts">
import { countries, flagEmoji, type Country } from '../../data/countries';

// Los slots de v-autocomplete envuelven el Country original en `.raw`.
interface CountryListItem {
    raw: Country;
}

defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

// v-autocomplete puede emitir null; normalizamos a '' para que el modelo sea siempre string.
const onUpdate = (value: string | null) => emit('update:modelValue', value ?? '');
</script>

<style scoped>
.country-select-flag {
    font-size: 1.15rem;
    line-height: 1;
}
</style>
