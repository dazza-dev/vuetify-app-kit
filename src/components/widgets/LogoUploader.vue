<template>
    <div class="logo-uploader">
        <div class="logo-uploader-card">
            <div class="logo-uploader-preview" :class="{ 'logo-uploader-preview--dark': dark }">
                <img v-if="modelValue" :src="modelValue" :alt="altText" />
                <PhotoIcon v-else :size="40" stroke="1.5" class="logo-uploader-placeholder-icon" />
                <div v-if="loading" class="logo-uploader-loading-overlay">
                    <v-progress-circular indeterminate color="primary" size="32" />
                </div>
            </div>
            <div class="logo-uploader-actions">
                <button type="button" class="logo-uploader-btn" :disabled="loading" @click="openFileDialog">
                    <UploadIcon :size="18" stroke-width="2" />
                    <span>{{ $t('common.change') }}</span>
                </button>
                <button
                    type="button"
                    class="logo-uploader-btn logo-uploader-btn--danger"
                    :disabled="loading || !modelValue"
                    @click="onRemove"
                >
                    <TrashIcon :size="18" stroke-width="2" />
                    <span>{{ $t('common.remove') }}</span>
                </button>
            </div>
        </div>
        <div v-if="helpText" class="text-caption text-medium-emphasis mt-1">{{ helpText }}</div>
        <div v-if="error" class="text-caption text-error mt-1">{{ error }}</div>
        <input ref="fileInput" type="file" :accept="accept" class="d-none" @change="onFilePick" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UploadIcon, TrashIcon, PhotoIcon } from 'vue-tabler-icons';

const MIME_LABELS: Record<string, string> = {
    'image/png': 'PNG',
    'image/jpeg': 'JPG',
    'image/webp': 'WebP',
    'image/gif': 'GIF',
    'image/svg+xml': 'SVG'
};

interface Props {
    modelValue: string;
    uploadFn: (file: File) => Promise<string>;
    accept?: string;
    dark?: boolean;
    helpText?: string;
    altText?: string;
    maxSizeMb?: number;
}

const props = withDefaults(defineProps<Props>(), {
    accept: 'image/png,image/jpeg',
    dark: false,
    helpText: undefined,
    altText: 'logo',
    maxSizeMb: 1
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'error', message: string): void;
}>();

const { t } = useI18n();
const fileInput = ref<HTMLInputElement | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const openFileDialog = () => {
    error.value = null;
    fileInput.value?.click();
};

// Reinicia el <input> para poder reelegir el mismo archivo tras eliminarlo.
const resetFileInput = () => {
    if (fileInput.value) fileInput.value.value = '';
};

// Tipos MIME de `accept` sin comodines: el filtro del diálogo puede saltarse, así que reforzamos aquí.
const restrictedTypes = (): string[] => {
    const patterns = props.accept
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
    return patterns.some((p) => p.endsWith('/*')) ? [] : patterns;
};

const onFilePick = async (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const allowedTypes = restrictedTypes();
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
        const formats = allowedTypes.map((type) => MIME_LABELS[type] ?? type).join(', ');
        const message = t('common.invalidFormat', { formats });
        error.value = message;
        emit('error', message);
        resetFileInput();
        return;
    }

    if (file.size > props.maxSizeMb * 1024 * 1024) {
        const message = t('common.fileTooLarge', { max: props.maxSizeMb });
        error.value = message;
        emit('error', message);
        resetFileInput();
        return;
    }

    loading.value = true;
    error.value = null;
    try {
        const url = await props.uploadFn(file);
        emit('update:modelValue', url);
    } catch {
        const message = t('common.uploadFailed');
        error.value = message;
        emit('error', message);
    } finally {
        loading.value = false;
        resetFileInput();
    }
};

const onRemove = () => {
    emit('update:modelValue', '');
    resetFileInput();
};
</script>

<style scoped>
.logo-uploader-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
}

.logo-uploader-preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
    padding: 24px 16px;
    background: #f3f4f6;
}

.logo-uploader-preview--dark {
    background: #1f2937;
}

.logo-uploader-preview img {
    max-height: 76px;
    max-width: 100%;
    object-fit: contain;
}

.logo-uploader-placeholder-icon {
    color: rgba(0, 0, 0, 0.28);
}

.logo-uploader-preview--dark .logo-uploader-placeholder-icon {
    color: rgba(255, 255, 255, 0.4);
}

.logo-uploader-loading-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.6);
}

.logo-uploader-preview--dark .logo-uploader-loading-overlay {
    background: rgba(0, 0, 0, 0.4);
}

.logo-uploader-actions {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.logo-uploader-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    background: transparent;
    border: none;
    color: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
}

.logo-uploader-btn:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.08);
}

.logo-uploader-btn:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.04);
}

.logo-uploader-btn--danger {
    color: rgb(var(--v-theme-error));
}

.logo-uploader-btn--danger:hover:not(:disabled) {
    background: rgba(var(--v-theme-error), 0.08);
}

.logo-uploader-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
}
</style>
