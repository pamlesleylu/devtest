<script>
  import RouterLink from "../router/RouterLink.svelte";
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }
</style>

<nav>
  <ul>
    <li>
      <RouterLink path="/" name="Home" />
    </li>
    <li>
      <RouterLink path="/exam" name="Exam" />
    </li>
    <li>
      <RouterLink path="/about" name="About" />
    </li>
  </ul>
</nav>
