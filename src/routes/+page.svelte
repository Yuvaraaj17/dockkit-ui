<script>
    import Header from "$lib/components/Header.svelte";
    import InfoText from "$lib/components/InfoText.svelte";
    import ActionButton from "$lib/components/ActionButton.svelte";
    import { CloseCircleSolid } from "flowbite-svelte-icons";
    import data from "../data.json";
    import Select from "svelte-select";

    const baseOsList = data["base-os"];
    var selectedBaseOS = "";

    const selectOS = (/** @type {string} */ value) => {
        if(selectedBaseOS !== value){
        selectedBaseOS = value;
    }
}

    const items = [
        { value: "gcc", label: "GCC" },
        { value: "clang", label: "Clang" },
        { value: "cmake", label: "CMake" },
    ];

    /** @type {{ value: string, label: string }[]} */
    let selectedItems = [];
    /**
     * @type {null}
     */
    let selectValue = null;

    /**
     * @param {{ detail: any; }} event
     */
    function handleSelect(event) {
        console.log(selectedItems);
        const selected = event.detail;
        if (
            selected &&
            !selectedItems.find((i) => i.value === selected.value)
        ) {
            selectedItems = [...selectedItems, selected];
        }
    }

    /**
     * @param {string} event
     * @param {string} itemValue
     */
    function removeLib(event, itemValue) {
        console.log("Removing item with value:", itemValue);
        selectedItems = selectedItems.filter(
            (item) => item.value !== itemValue,
        );
    }

    async function buildImage() {
        const res = await fetch("/api/build", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                base_image: "ubuntu:22.04",
                packages: ["git", "g++", "cmake"],
            }),
        });
        const data = await res.json();
        console.log("Build image response:", data);
    }
</script>

<!-- <div class="bg-blue-300 h-full"> -->
<Header />
<div
    class="flex flex-col items-center justify-center p-4 bg-gray-100 w-1/2 h-full gap-5"
>
    <InfoText
        name={`Dockit is a SvelteKit application that provides a user-friendly interface for creating custom docker images. \n It allows users to easily view, create, and manage their Docker resources through a sleek and modern web interface.`}
    />
    <div class="flex flex-row w-full gap-4 flex-wrap">
        {#each baseOsList as name, i}
            <ActionButton name={name} chooseOS={selectOS} isActive={name == selectedBaseOS}/>
        {/each}
    </div>
    <div class="flex flex-row items-center justify-between gap-4 w-full">
        <Select
            {items}
            placeholder="Type and select to add"
            class="w-full"
            bind:value={selectValue}
            on:select={handleSelect}
            clearable
            searchable
        />
        <div class="w-full text-center">
            Selected items:
            {#each selectedItems as item (item.value)}
                <span class="inline-block bg-emerald-200 rounded px-2 py-1 m-1"
                    >{item.label}
                    <CloseCircleSolid
                        onclick={(e) => removeLib(e, item.value)}
                    /></span
                >
            {/each}
        </div>
    </div>
    <button
        class="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600"
        on:click={buildImage}
        >Build Image
    </button>

    <!-- </div> -->
</div>
