<script>
  import { onMount } from "svelte";
  import router, { init } from "./index.js";

  onMount(init);

  function handleBackNavigation(event) {
    router.navigate(event.state.path);
  }
</script>

<svelte:window on:popstate={handleBackNavigation} />
