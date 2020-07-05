<script>
  export let question;
  export let options;

  export let answer;
</script>

<style>
  label {
    display: block;

    line-height: 1.5;
    list-style: none;
    margin: 1em 0;
    padding: 0 1.5em;

    border: 1px solid black;
    border-radius: 50px / 50px;
  }

  label.selected {
    border-width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  label:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  input[type="radio"] {
    display: none;
  }
</style>

<div>
  {@html question}
</div>
{#each options as o}
  {#if o.trim()}
    <label class:selected={answer === o}>
      <input type="radio" bind:group={answer} value={o} />
      {o}
    </label>
  {/if}
{/each}
