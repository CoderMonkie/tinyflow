<script lang="ts">
    import Button from './button.svelte';
    import type { MyHTMLButtonAttributes } from './types';

    const { ...rest }: MyHTMLButtonAttributes = $props();
</script>

<Button {...rest} class="input-btn-more {rest.class}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
    </svg>
</Button>

<style>
    :global(.input-btn-more) {
        border: 1px solid transparent;
        padding: 3px;

        &:hover {
            background: #eee;
            border: 1px solid transparent;
        }
    }
</style>
