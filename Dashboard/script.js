// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = getElementById("sidebar");

function sidebarOpen(){
  if (!sidebarOpen){
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar(){
  if (sidebarOpen){
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}