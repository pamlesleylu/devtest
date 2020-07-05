<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`data/questions.json`)
      .then(r => r.json())
      .then(questions => {
        return { questions };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  import Question from "../components/Question.svelte";

  let questions = [];

  onMount(async () => {
    questions = await fetch(`data/questions.json`).then(r => r.json());
  });
</script>

<style>
  .question-number {
    font-weight: 700;
  }

  .question {
    margin: 0 2em;
  }
</style>

<svelte:head>
  <title>Questions</title>
</svelte:head>

<h1>Questions</h1>

{#each questions as q, index}
  <div class="question-number">{index + 1}.</div>
  <div class="question">
    <Question question={q.question} options={q.options} bind:answer={q.input} />
  </div>
{:else}
  <!-- this block renders when photos.length === 0 -->
  <p>loading...</p>
{/each}
