var isSidebarOpen = false; // Boolean to track sidebar state
var sidebar = document.getElementById("sidebar");

function openSidebarMenu() {
  if (!isSidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    isSidebarOpen = true;
  }
}

function closeSidebarMenu() {
  if (isSidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    isSidebarOpen = false;
  }
}
