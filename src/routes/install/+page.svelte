<script lang="ts">
  import BhAdvert from "$lib/components/decorative/BHAdvert.svelte";
  import { createTabs, melt } from "@melt-ui/svelte";
  import { quartInOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  const {
    elements: { root, list, content, trigger },
    states: { value }
  } = createTabs({
    defaultValue: "new"
  });

  const triggers = [
    { id: "new", title: "New World" },
    { id: "existing", title: "Existing World" },
    { id: "server", title: "Server" }
  ];

  const [send, receive] = crossfade({
    duration: 250,
    easing: quartInOut
  });
</script>

<svelte:head>
  <title>Installation | Datapack Hub</title>
  <meta name="description" content="Learn how to install Datapacks" />
</svelte:head>

<main
  id="main-content"
  class=" bg-slate-50 px-4 transition-all lg:px-32 xl:px-64 dark:bg-zinc-900">
  <div class="w-full flex-col items-center md:flex-row md:items-start md:pt-32">
    <h1
      class="my-3 pb-2 text-center text-5xl font-bold text-zinc-950 md:text-start md:text-4xl lg:text-5xl dark:text-white">
      How to install Minecraft Data Packs
    </h1>
    <div
      class="mb-2 flex w-max space-x-2 rounded-lg bg-slate-200 p-2 dark:bg-zinc-800"
      use:melt="{$root}">
      <div use:melt="{$list}">
        {#each triggers as triggerItem}
          <button
            class="relative border-slate-400 px-2 first:border-r last:border-l dark:border-zinc-600 dark:text-white"
            use:melt="{$trigger(triggerItem.id)}">
            {triggerItem.title}
            {#if $value === triggerItem.id}
              <div
                in:send="{{ key: 'trigger' }}"
                out:receive="{{ key: 'trigger' }}"
                class="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-400 dark:bg-zinc-400">
              </div>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <div use:melt="{$content('new')}">
      <div
        class="space-y-2 rounded-xl bg-slate-200 p-3 text-center align-middle md:text-start dark:bg-slate-50/10 dark:text-white">
        <p>
          <b>1. Go to the Create New World screen.</b> Make sure you're using the
          Minecraft Java edition and that you have the right version selected. Enable
          cheats.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125491520963870881/image.png"
          alt="New World Screen"
          class="w-2/3" />

        <p class="pt-4">
          <b>2. Navigate to the Data Packs screen.</b> On the latest Minecraft versions,
          this is in the More tab.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125490094598541322/image.png"
          alt="Datapacks screen on the New World Screen"
          class="w-2/3" />

        <p class="pt-4">
          <b>3. Drag the datapack ZIP file onto this screen.</b> Or, hit Open Pack
          Folder and paste the zip in the folder which opens.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125491117048213686/image.png"
          alt="Dragging datapack in from file explorer"
          class="w-2/3" />

        <p class="pt-4">
          <b>4. Create the world.</b> Once you are in the world, run /reload in chat.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125493215739527178/image.png"
          alt="New world with datapack"
          class="w-2/3" />
      </div>
    </div>

    <div use:melt="{$content('existing')}">
      <div
        class="space-y-2 rounded-xl bg-slate-200 p-3 text-center align-middle md:text-start dark:bg-slate-50/10 dark:text-white">
        <p class="font-bold">1. Find your world, and hit Edit</p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125493410279727144/image.png"
          alt="Finding world"
          class="w-2/3" />

        <p class="pt-4"><b>2. Open the World Folder.</b></p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125493693533650954/image.png"
          alt="World folder"
          class="w-2/3" />

        <p class="pt-4">
          <b>3. In the world folder, open the datapacks folder.</b>
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125494220589912124/image.png"
          alt="Datapack folder"
          class="w-2/3" />

        <p class="pt-4">
          <b>4. Drag the Datapack ZIP in the datapacks folder.</b> Or, paste the
          zip in the folder.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125494742331961465/image.png"
          alt="Dragging datapack into folder"
          class="w-2/3" />

        <p class="pt-4">
          <b>5. Open the world.</b> Once you are in the world, run /reload in chat.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125493215739527178/image.png"
          alt="Opening world"
          class="w-2/3" />
      </div>
    </div>

    <div use:melt="{$content('server')}">
      <div
        class="space-y-2 rounded-xl bg-slate-200 p-3 text-center align-middle md:text-start dark:bg-slate-50/10 dark:text-white">
        <BhAdvert />
        <p class="font-bold text-red-500">
          Note - some datapacks won't be compatible with server software such as
          Bukkit, Spigot, or plugins like EssentialsX.
        </p>
        <p class="pt-2">
          <b>1. Open your server's file manager.</b> In this case, we're using Bisect
          Hosting, so we use their dashboard. Other server hosts will have a similar
          layout.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125496274167283742/image.png"
          alt="Bisect Hosting File Manager"
          class="w-2/3" />

        <p class="pt-4">
          <b>2. Open the world folder, then open the datapacks folder.</b>
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125496614379864125/image.png"
          alt="World folder on server"
          class="w-2/3" />

        <p class="pt-4">
          <b>3. Upload the datapack.</b> Usually, you can drag and drop the file
          here, but in some cases you gotta hit an Upload button.
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125496890931286016/image.png"
          alt="Uploading datapack"
          class="w-2/3" />

        <p class="pt-4">
          <b>4. Run /reload (or /minecraft:reload on Bukkit based servers).</b>
          You can do this using the server console, or in the chat if you join the
          server (and have OP.)
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/723984082853298297/1125493215739527178/image.png"
          alt="Reloading"
          class="w-2/3" />
      </div>
    </div>

    <div use:melt="{$content('realm')}">
      <div
        class="space-y-2 rounded-xl bg-slate-200 p-3 text-center align-middle md:text-start dark:bg-slate-50/10 dark:text-white">
        <p class="font-bold">1. Download the world from your realm</p>
      </div>
    </div>
  </div>
</main>
