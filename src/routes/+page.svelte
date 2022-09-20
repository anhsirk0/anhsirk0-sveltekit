<script>
  import Card from "../components/Card.svelte";
  import UserIcon from "../components/UserIcon.svelte";
  import BriefcaseIcon from "../components/BriefcaseIcon.svelte";
  import ChatIcon from "../components/ChatIcon.svelte";
  import TerminalIcon from "../components/TerminalIcon.svelte";
  import HandIcon from "../components/HandIcon.svelte";
  import { fade } from "svelte/transition";

  let Cards = [
    { title: "About me", Icon: UserIcon, url: "about" },
    { title: "Projects", Icon: BriefcaseIcon, url: "projects" },
    { title: "Tech Stack", Icon: TerminalIcon, url: "tech" },
    { title: "Contact", Icon: ChatIcon, url: "contact" },
  ];
</script>

<svelte:head>
  <title>Home • Anhsirk0</title>
</svelte:head>

<div
  in:fade
  class="flex flex-col gap-8 justify-center lg:p-8 h-full w-[80vw] lg:w-[72vw] 2xl:w-[70vw] 2xl:max-h-[96vh]"
>
  <p
    class="text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold px-2 md:px-0 md:mx-auto mb-6 lg:mb-12 2xl:mb-28"
  >
    Hello,
    <HandIcon />
    <br />
    I'm
    <span
      class="text-primary rounded-xl hover:ring-2 hover:ring-primary hover:rounded-xl px-2 hover:rotate-1 inline-block transition"
    >
      Krishna
    </span>
  </p>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-4 2xl:gap-6"
  >
    {#each Cards as card (card.title)}
      <Card title={card.title} Icon={card.Icon} url={card.url} />
    {/each}
  </div>
</div>
