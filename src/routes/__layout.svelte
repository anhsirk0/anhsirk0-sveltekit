<script>
  import "../app.css";
  import SidebarContent from "../components/SidebarContent.svelte";
</script>

<div class="bg-base-300 min-h-screen">
  <div class="drawer drawer-mobile">
    <input id="sidebar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-screen">
      <!-- Navbar -->
      <div class="lg:hidden w-full navbar bg-base-300 sticky inset-0 z-50">
        <div class="flex-none lg:hidden">
          <label for="sidebar" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              /></svg
            >
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 lg:hidden">Anhsirk0</div>
      </div>
      <!-- Page content here -->
      <div
        class="min-w-[80vw] lg:min-w-[70vw] mx-auto flex items-center justify-center min-h-[88vh] lg:min-h-screen"
      >
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="sidebar" class="drawer-overlay" />
      <ul
        class="menu p-4 overflow-y-auto w-56 md:w-80 lg:w-64 2xl:w-80 bg-base-200 text-base-content space-y-2"
      >
        <!-- Sidebar content here -->
        <SidebarContent />
      </ul>
    </div>
  </div>
</div>
