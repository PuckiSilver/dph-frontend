<script lang="ts">
  export let html = "";
  export let classes = "";
</script>

<!-- tailwind is so clean ._. -->
<div
  class="prose break-words
  dark:prose-invert
  prose-a:break-all
  prose-a:underline
  prose-blockquote:border-slate-300
  prose-code:rounded-md
  prose-code:bg-slate-300
  prose-code:p-1
  prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-300
  prose-pre:p-3 prose-table:rounded-lg prose-table:bg-slate-300/40 prose-th:p-3 prose-td:p-3
  prose-img:py-3 prose-hr:my-12
  prose-blockquote:dark:border-zinc-600 dark:prose-code:bg-zinc-950 dark:prose-pre:bg-zinc-950
  prose-table:dark:bg-zinc-700/40 {classes}">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html html}
</div>
