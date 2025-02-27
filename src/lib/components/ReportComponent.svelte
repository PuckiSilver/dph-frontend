<script lang="ts">
  import { fetchAuthed } from "$lib/globals/functions";
  import type { Report } from "$lib/globals/schema";
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";
  import IconNoPhoto from "~icons/tabler/Polaroid.svelte";
  import IconX from "~icons/tabler/X.svelte";
  import MarkdownComponent from "./markdown/MarkdownRenderer.svelte";

  export let report: Report;

  let visible = false;

  let me: HTMLDivElement;

  onMount(() => {
    visible = true;
  });

  async function remove() {
    let rem = await fetchAuthed(
      "delete",
      "/moderation/remove_report/" + report.id
    );
    if (rem.ok) {
      toast.success("Dismissed report!");
      me.remove();
    } else {
      toast.error("Blame Silabear, this didn't work.");
    }
  }
</script>

<div
  class="reports relative w-full items-center rounded-xl bg-slate-200 p-3 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100"
  bind:this="{me}">
  <div class="flex items-center">
    <a
      href="/project/{report.project.url}"
      class="rounded-lg {report.project.icon
        ? ''
        : 'bg-slate-300 p-4 dark:bg-zinc-700 dark:text-zinc-100'}">
      {#if report.project.icon}
        <img
          loading="lazy"
          src="{report.project.icon}"
          alt="{report.project.title} icon"
          width="80"
          height="80"
          class="aspect-square w-20 rounded-lg bg-cover" />
      {:else}
        <IconNoPhoto width="48" height="48" />
      {/if}
    </a>
    <div class="ml-4 w-2/3">
      <a
        href="/project/{report.project.url}"
        class=" text-lg hover:underline md:text-xl lg:text-2xl">
        {report.project.title}
      </a>
      {#if visible}
        <div class="text-md dark:text-zinc flex space-x-2 text-zinc-950/40">
          <a
            href="/user/{report.project.author.username.toLowerCase()}"
            class="block dark:hover:text-zinc-100">
            {report.project.author.username}
          </a>
          {#if report.project.latest_version}
            <span>•</span>
            <span
              >{report.project.latest_version.minecraft_versions
                .split(",")
                .at(-1)}</span>
            <span>•</span>
            <span>{report.project.latest_version.version_code}</span>
          {:else}
            <span>•</span>
            <span>No versions</span>
          {/if}
        </div>
      {/if}
      <p
        class="line-clamp-3 text-sm font-medium text-zinc-950/40 md:text-sm dark:text-zinc-100/40">
        {report.project.description}
      </p>
    </div>
  </div>
  <div class="moderation relative mt-2 rounded-xl p-3">
    <b>Reported by {report.reporter.username}:</b>
    <div class="moderation-hl rounded-lg px-2 py-1">
      <MarkdownComponent source="{report.message}" />
    </div>
    <button
      data-testid="remove-report-btn"
      class="absolute right-0 top-0 p-3"
      on:click="{remove}"><IconX /></button>
  </div>
</div>
