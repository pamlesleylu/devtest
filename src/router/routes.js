import About from '../views/About.svelte';
import Home from '../views/Home.svelte';
import Exam from '../views/Exam.svelte';

const routes = {
  '/': Home,
  '/exam': Exam,
  '/about': About
};

export default routes;
