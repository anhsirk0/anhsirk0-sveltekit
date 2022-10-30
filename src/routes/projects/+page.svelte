<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));

  const toLangTitle = (lang) => {
    let str = lang.replace(".png", "");
    return (
      "written in " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };

  // TODO extract projects to a json file
  let projects = [
    {
      title: "Fetch-master-6000",
      desc: "Simple Dilbert themed system information fetching tool for Linux and BSD based systems.",
      lang: "perl.png",
      src: "https://github.com/anhsirk0/fetch-master-6000",
    },
    {
      title: "Arranger",
      desc: "Simple and capable Files and Directory arranger/cleaner.",
      lang: "perl.png",
      src: "https://github.com/anhsirk0/file-arranger",
    },
    {
      title: "Pere",
      desc: "Pere is a bulk file renamer written in Perl.",
      lang: "perl.png",
      src: "https://github.com/anhsirk0/pere",
    },
    {
      title: "Whatsapp-svelte",
      desc: "WhatsApp mockup screens using Tailwind, DaisyUI and Sveltekit.",
      lang: "svelte.png",
      src: "https://github.com/anhsirk0/whatsapp-svelte",
      url: "https://anhsirk0-whatsapp.netlify.com",
    },
    {
      title: "Slider-login-signup",
      desc: "Login/Signup design with a slider animation made with tailwindcss and nextjs.",
      lang: "js.png",
      src: "https://github.com/anhsirk0/slider-login-signup",
      url: "https://anhsirk0-ts-projects.netlify.com/slider",
    },
    {
      title: "Ts-projects",
      desc: "Some Typescript projects as NextJs pages",
      lang: "ts.png",
      src: "https://github.com/anhsirk0/ts-projects",
      url: "https://anhsirk0-ts-projects.netlify.com",
    },
    {
      title: "Mosaic-rust",
      desc: "Rust program to create photomosaics (image made of smaller images as mosaic tiles).",
      lang: "rust.png",
      src: "https://github.com/anhsirk0/mosaic-rust",
    },
    {
      title: "Lyapunov",
      desc: "Rust program to generate lyapunov fractals",
      lang: "rust.png",
      src: "https://github.com/anhsirk0/lyapunov",
    },
    {
      title: "Mandelbrot",
      desc: "Rust program to generate mandelbrot fractals",
      lang: "rust.png",
      src: "https://github.com/anhsirk0/mandelbrot",
    },
    {
      title: "News-cli",
      desc: "News and article viewing utility using New-York times API.",
      lang: "rust.png",
      src: "https://github.com/anhsirk0/news-cli",
    },
    {
      title: "Solus-awesome",
      desc: "Simple bash script to build & install awesomewm on Solus Linux.",
      lang: "bash.png",
      src: "https://github.com/anhsirk0/solus-awesome",
    },
    {
      title: "Quote-uploader",
      desc: "Create slideshow of images from brainyquote and upload to dailymotion.",
      lang: "bash.png",
      src: "https://github.com/anhsirk0/quote-uploader",
    },
    {
      title: "Kakoune-themes",
      desc: "Beautiful color schemes for kakoune text editor.",
      lang: "kakounescript",
      src: "https://github.com/anhsirk0/kakoune-themes",
    },
    {
      title: "Awesome-config",
      desc: "My config for the awesome window manager.",
      lang: "lua.png",
      src: "https://github.com/anhsirk0/awesome-config",
    },
    {
      title: "Django projects",
      desc: "Some Django projects for CS50 submissions.",
      lang: "python.png",
      src: "https://github.com/anhsirk0/django-projects",
    },
    {
      title: "Pygames",
      desc: "Some simple 2D games made with Pygame.",
      lang: "python.png",
      src: "https://github.com/anhsirk0/pygames",
    },
    {
      title: "This website",
      desc: "Source code for this website. (anhsirk0.github.io)",
      lang: "svelte.png",
      src: "https://github.com/anhsirk0/anhsirk0-sveltekit",
    },
  ];
</script>

<svelte:head>
  <title>Projects • Anhsirk0</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[66vw] xl:w-[76vw] 2xl:w-[70vw] my-4 lg:my-3 2xl:my-4 lg:p-8"
>
  {#each projects as project (project.title)}
    <div
      class="card bg-base-200 hover:ring-2 hover:ring-primary col-span-6 md:col-span-2 2xl:col-span-2"
    >
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <div class="flex flex-row gap-4 mb-1 xl:mb-2">
          <p class="text-lg md:text-xl 2xl:text-3xl font-bold">
            {project.title}
          </p>
          {#if project.lang.includes("png")}
            <img
              class="h-7 2xl:h-10 border-1 border-neutral-focus p-0.5 2xl:p-1 rounded-lg"
              title={toLangTitle(project.lang)}
              alt={project.title}
              src={"/" + project.lang}
            />
          {:else}
            <span
              title={toLangTitle(project.lang)}
              class="h-7 w-7 2xl:h-10 2xl:w-10 border-1 border-neutral-focus text-lg 2xl:text-2xl text-secondary-content rounded-lg flex items-center justify-center"
              >{project.lang[0]}</span
            >
          {/if}
        </div>
        <p class="2xl:text-xl">
          {project.desc}
        </p>
        <div class="ml-auto flex items-center flex-row gap-4">
          <div class="grow" />
          {#if project.url}
            <a
              class="h-10 2xl:h-12 w-10 2xl:w-12 p-1.5 2xl:p-2 bg-neutral-focus rounded-lg flex items-center justify-center"
              href={project.url}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 2xl:w-7 h-6 2xl:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          {/if}

          <a href={project.src} target="_blank">
            <img
              class="h-10 2xl:h-12 rounded-lg bg-neutral-focus p-1 2xl:p-2"
              alt="View on github"
              src="/github.png"
            />
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
