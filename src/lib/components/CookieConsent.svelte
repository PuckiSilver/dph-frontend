<script>
  import { browser } from "$app/environment";
  import { invalidateAll } from "$app/navigation";
  import { removeCookie } from "$lib/globals/functions";
  import { windowWidth } from "$lib/globals/stores";

  let visible = true;

  function acceptCookies() {
    visible = false;
    if (browser) {
      localStorage.setItem("acceptedCookies", "1");
      invalidateAll();
    }
  }

  // prob still a violation
  function denyCookies() {
    visible = false;
    if (browser) {
      removeCookie("dph_token");
      localStorage.setItem("acceptedCookies", "1");
      invalidateAll();
    }
  }
</script>

{#if visible}
  <div
    class="fixed z-50 {$windowWidth > 768
      ? 'bottom-0'
      : 'top-0'} m-2 grid w-full grid-cols-2 rounded-lg bg-white p-3 dark:bg-black">
    <div>
      <p class="text-base font-bold md:text-lg lg:text-xl dark:text-white">
        Hey there, we've got some news—we use cookies on our site.
      </p>
      <p class="text-xs md:text-sm lg:text-base dark:text-white">
        They make this site tick. If you're cool with that, awesome—hit
        'Accept.' Not your thing? That's cool too, hit 'Decline.' Check out our <a
          href="/privacy"
          class="underline">privacy policy</a> for details. Thanks!
      </p>
    </div>
    <div class="flex items-center justify-end gap-3">
      <button class="button-secondary" on:click="{() => acceptCookies()}"
        >Accept</button>
      <button class="button-secondary" on:click="{() => denyCookies()}"
        >Decline</button>
      {#if $windowWidth > 768}
        <a href="/privacy" class="button-secondary">Privacy Policy</a>
      {/if}
    </div>
  </div>
{/if}
