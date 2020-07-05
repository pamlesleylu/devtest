<script>
  import { onMount } from "svelte";
  import RouterOutlet from "./router/RouterOutlet.svelte";
  import Router from "./router/Router.svelte";
  import Nav from "./components/Nav.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<Nav />
<Router />
<header class="App-header">Dev Testing</header>
<main>
  <RouterOutlet />
</main>
