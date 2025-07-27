<script>
  export let name;
//   $: htmlName = name.replace(/\n/g, "<br>");
</script>
<p class="w-full text-justify">
    {name ? name : "Welcome to Dockkit!"}!
</p>