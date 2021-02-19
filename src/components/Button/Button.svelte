<script>
    import './../../assets/3rdparty/fontawesome/fontawesome.min.js';
    import './../../assets/3rdparty/fontawesome/fontawesome.min.css';
    import './Button.css';

    export let label = '';
    export let type = '';;
    export let active = false;
    export let icon = '';
    export let cssClass = '';

    const activeClass = active ? 'active' : ''


</script>

{#if type !== 'icon'}
    <button class="btn {type} {activeClass}">{label}</button>
{:else}
    <button class="btn {type} {activeClass} {cssClass}"><i class="btn-i {icon}"></i></button>
{/if}
