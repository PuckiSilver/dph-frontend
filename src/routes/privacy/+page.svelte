<script lang="ts">
  import RawMarkdownRenderer from "$lib/components/markdown/RawMarkdownRenderer.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Privacy | Datapack Hub</title>
  <meta name="description" content="Our privacy policy" />
</svelte:head>

<main
  id="main-content"
  class="bg-slate-50 px-4 transition-all lg:px-32 xl:px-64 dark:bg-zinc-900">
  <div class="pt-32"></div>
  <RawMarkdownRenderer html="{data.policy}" />
  <div class="pb-10"></div>
</main>
