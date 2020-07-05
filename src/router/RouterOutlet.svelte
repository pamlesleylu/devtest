<script>
  import router from "./index.js";

  let component;

  router.pageChanged(({ component: newComponent }) => {
    component = newComponent;
  });
</script>

<svelte:component this={component} />
