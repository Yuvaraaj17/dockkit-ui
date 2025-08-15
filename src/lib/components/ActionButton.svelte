<script>
    export let name;
    export let chooseOS;
    export let isActive;
</script>

<button
    on:click={() => chooseOS(name)}
    class={`flex flex-row w-fit py-1 pl-2.5 pr-2 border rounded-full gap-2 items-center ${isActive ?  "border-blue-700 bg-blue-50 text-blue-700 shadow-[0_1px_3px_rgba(66,133,244,0.3),0_4px_8px_rgba(66,133,244,0.2)]": "border-gray-900 bg-white text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"}`}
>
    <span class={`text-xs ${isActive ? "font-semibold" : "font-normal"}`}>{name}</span>
    {#if isActive}
        <svg
            class="mt-[1px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                class="text-blue-700 shadow-[0_0_8px_2px_rgba(66,133,244,0.5)]"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11.917 9.724 16.5 19 7.5"
            />
        </svg>
    {:else}
        <svg
            class="mt-[1px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                class="text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
            />
        </svg>
    {/if}
</button>
