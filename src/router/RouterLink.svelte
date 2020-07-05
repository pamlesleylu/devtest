<script>
  import router from "./index.js";

  export let path = "";
  export let name = "";
  export let active = false;

  function navigateTo(event) {
    router.navigate(event.target.pathname);
  }

  router.pageChanged(({ path: newPath }) => {
    active = path === newPath;
  });
</script>

<style>
  .active {
    position: relative;
    display: inline-block;
  }

  .active::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<a href={path} class:active on:click|preventDefault={navigateTo}>{name}</a>
