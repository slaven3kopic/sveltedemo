<script>
    import './button.css';

    export let label;
    export let type;
    export let active;

    console.log(active);
    const activeClass = active ? 'active' : ''

</script>

<button class="btn {type} {activeClass}">{label}</button>
