<script>
    export let name;
    export let active = false; 
</script>

<button class={`w-48 text-center h-fit p-2 rounded ${active ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'} border-emerald-600 border-[1.5px]`} on:click>
    {name ? name : "Click Me!"}
</button>
