<script>
    import './button.css';
    import Icon from 'svelte-awesome';

    export let label;
    export let type;
    export let active;
    export let icon;
    export let cssClass;

    const activeClass = active ? 'active' : ''

</script>

{#if type !== 'icon'}
    <button class="btn {type} {activeClass}">{label}</button>
{:else}
    <button class="btn {type} {activeClass} {cssClass}"><Icon data={icon} /></button>
{/if}
