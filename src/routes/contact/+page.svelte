<script>
  import { fade } from "svelte/transition";
  let contacts = [
    { title: "Email", img: "mail.png", url: "mailto:krishna404@yandex.com" },
    {
      title: "Github",
      img: "github.png",
      url: "https://github.com/anhsirk0",
    },
    { title: "Telegram", img: "telegram.png", url: "https://t.me/anhsirk0" },
    // {
    //   title: "Reddit",
    //   img: "reddit.png",
    //   url: "https://reddit.com/u/anhsirk0",
    // },
    {
      title: "LinkedIn",
      img: "linkedin.png",
      url: "https://linkedin.com/in/anhsirk0",
    },
  ];
</script>

<svelte:head>
  <title>Contact • Anhsirk0</title>
</svelte:head>
<div
  in:fade
  class="grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[66vw] xl:w-[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  {#each contacts as contact (contact.title)}
    <a
      href={contact.url}
      target="_blank"
      class="card bg-base-200 hover:ring-2 hover:ring-primary col-span-6 md:col-span-3 2xl:col-span-2"
    >
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <div
          class="flex flex-row gap-4 lg:gap-6 2xl:gap-8 justify-between items-center"
        >
          <p class="text-lg md:text-xl 2xl:text-3xl font-bold">
            {contact.title}
          </p>
          <img
            class="h-10 2xl:h-12"
            alt={contact.title}
            src={"/" + contact.img}
          />
        </div>
      </div>
    </a>
  {/each}
</div>
