<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import TechCard from "../../components/TechCard.svelte";

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));

  let javascript = {
    title: "Javascript",
    img: "js.png",
    url: "https://ecma-international.org/publications-and-standards/standards/ecma-262",
  };

  let languages = [
    { title: "Bash", img: "bash.png", url: "https://gnu.org/software/bash" },
    javascript,
    { title: "Perl", img: "perl.png", url: "https://perl.org" },
    { title: "Python", img: "python.png", url: "https://python.org" },
    { title: "R", img: "r.png", url: "https://r-project.org/" },
    { title: "Rust", img: "rust.png", url: "https://rust-lang.org" },
  ];

  let frontend = [
    { title: "React", img: "react.png", url: "https://reactjs.org" },
    { title: "Svelte", img: "svelte.png", url: "https://svelte.dev" },
    { title: "Vue", img: "vue.png", url: "https://vuejs.org" },
    javascript,
    {
      title: "Tailwindcss",
      img: "tailwindcss.png",
      url: "https://tailwindcss.com",
    },
    { title: "Daisyui", img: "daisyui.png", url: "https://daisyui.com" },
    {
      title: "Materialize",
      img: "materialize.png",
      url: "https://materializecss.com",
    },
  ];

  let backend = [
    { title: "Django", img: "django.png", url: "https://djangoproject.com" },
    { title: "Nextjs", img: "nextjs.png", url: "https://nextjs.org" },
    { title: "Sveltekit", img: "sveltekit.png", url: "https://kit.svelte.dev" },
    { title: "Express", img: "express.png", url: "https://expressjs.com" },
  ];

  let tools = [
    { title: "Linux", img: "linux.png", url: "https://linuxfoundation.org" },
    { title: "Emacs", img: "emacs.png", url: "https://gnu/software/emacs" },
    { title: "Kakoune", img: "kakoune.png", url: "https://kakoune.org" },
    { title: "Fish", img: "fish.png", url: "https://fishshell.com" },
    { title: "Git", img: "git.png", url: "https://git-scm.com" },
    { title: "Github", img: "github.png", url: "https://github.com" },
    { title: "Inkscape", img: "inkscape.png", url: "https://inkscape.org" },
  ];
</script>

<svelte:head>
  <title>Tech Stack • Anhsirk0</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-12 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[77vw] 2xl:w-[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  <div class="col-span-12 xl:col-span-7 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
    <TechCard title="Languages" items={languages} />
    <TechCard title="Web frontend" items={frontend} />
  </div>
  <div class="col-span-12 xl:col-span-5 grid gap-4 lg:gap-6 2xl:gap-8">
    <TechCard title="Web backend" items={backend} />
    <TechCard title="Tools" items={tools} />
  </div>
</div>
