<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));

  let interests = [
    {
      title: "Linux",
      checked: true,
      content:
        "Linux is a major part of my daily life. I started using Linux around 4 year ago. Its been a hobby since I started using it.",
    },
    {
      title: "Text editors and Terminals",
      checked: false,
      content:
        "I tried almost all of the FLOSS Text Editors and Terminals over the years. Emacs and Kakoune are my favourites. Alacritty is my goto for Terminal",
    },
    {
      title: "Frontend development",
      checked: false,
      content:
        "This is what I do as a profession. I like Tailwindcss and Svelte/React as my choice of tools for making functional and beautiful Webapps.",
    },
    {
      title: "Scripting and Automating",
      checked: false,
      content:
        "Yes, I spend 5 hours autmating stuff that can be done manually in 5 minutes.",
    },
    {
      title: "Playing chess",
      checked: false,
      content: "I like playing Chess and watching Anime in my free time.",
    },
  ];

  const updateCollapse = (title) => {
    interests = interests.map((item) => {
      if (item.title === title) {
        return { ...item, checked: !item.checked };
      }
      return { ...item, checked: false };
    });
  };
</script>

<svelte:head>
  <title>About • Anhsirk0</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-5 gap-4 lg:gap-8 w-[86vw] lg:w-[66vw] xl:w-[76vw] 2xl:w[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  <div class="flex flex-col gap-4 lg:gap-8 col-span-5 xl:col-span-3">
    <div class="card bg-base-200 hover:ring-2 hover:ring-primary">
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <p class="text-xl md:text-2xl 2xl:text-4xl mb-2 2xl:mb-3 font-bold">
          Hi there!
        </p>
        <p class="md:text-lg 2xl:text-2xl">
          I'm Aman Kumar, I go by <span class="text-primary">Krishna</span>
          online.
          <br />
          I am a <span class="text-primary">Computer Science </span> student at
          Kurukshetra University from <span class="text-primary">India</span> .
          I have been enjoying programming for about
          <span class="text-primary">4</span>
          years, mostly as a
          <span class="text-primary">Web developer</span>
          and messing around with <span class="text-primary">GNU/Linux</span> .
        </p>
      </div>
    </div>

    <div class="card bg-base-200 rounded-xl hover:ring-2 hover:ring-primary">
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <p class="text-xl md:text-2xl 2xl:text-4xl mb-2 2xl:mb-3 font-bold">
          What I do
        </p>
        <p class="md:text-lg 2xl:text-2xl">
          I am a Full-stack Web Developer by profession and I work on CLI tools
          in my free time. I also do some graphics designing work every now and
          then. Ever since I started using a computer, I've always been
          fascinated with technology and wanted to learn about it as much as I
          could. Over the years, I started doing online courses and creating
          projects to get better at programming. I use and promote Free/Libre
          Open Source software.
        </p>
      </div>
    </div>
  </div>
  <div
    class="col-span-5 xl:col-span-2 card bg-base-200 rounded-xl hover:ring-2 hover:ring-primary"
  >
    <div class="card-body p-4 lg:p-6 2xl:p-8">
      <p class="text-lg md:text-2xl 2xl:text-4xl font-bold mb-4">
        Things I Enjoy!
      </p>
      <div class="flex flex-col gap-3 lg:gap-4 h-full">
        {#each interests as info (info.title)}
          <div
            on:click={() => {
              updateCollapse(info.title);
            }}
            tabindex="0"
            class="collapse collapse-arrow border border-base-100 rounded-box"
          >
            <input type="checkbox" checked={info.checked} />
            <div class="collapse-title text-lg 2xl:text-2xl font-medium">
              {info.title}
            </div>
            <div class="collapse-content 2xl:text-lg">
              <p>
                {info.content}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
