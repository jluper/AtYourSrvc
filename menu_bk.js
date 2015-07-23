/*
Top Navigational Bar II (By Mike Hall @ Brainjar.com)
Last updated: 00/05/08
Permission granted and modified by Dynamicdrive.com to include script in archive
For this and 100's more DHTML scripts, visit http://dynamicdrive.com
*/

var myNavBar1 = new NavBar(0);
var dhtmlMenu;

//define menu items (first parameter of NavBarMenu specifies main category width, second specifies sub category width in pixels)
//add more menus simply by adding more "blocks" of same code below

dhtmlMenu = new NavBarMenu(100, 120);
dhtmlMenu.addItem(new NavBarMenuItem("Home", "index.html"));
myNavBar1.addMenu(dhtmlMenu);

// Comment out the next 3 lines to get Memberships off the menu 3-02
//dhtmlMenu = new NavBarMenu(100, 120);
//dhtmlMenu.addItem(new NavBarMenuItem("Memberships", "memberships.htm"));
//myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(100, 120);
dhtmlMenu.addItem(new NavBarMenuItem("Services", "services.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Concierge Services", "services.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Home Improvement Services", "home_imp_services.htm"));
// Comment out the next 4 lines to get off menu 3-02
//dhtmlMenu.addItem(new NavBarMenuItem("Baskets", "baskets.htm"));
//dhtmlMenu.addItem(new NavBarMenuItem("Flowers", "flowers.htm"));
//dhtmlMenu.addItem(new NavBarMenuItem("Personal Chef", "chef.htm"));
//dhtmlMenu.addItem(new NavBarMenuItem("Christmas Trees", "christmas_trees.htm"));
myNavBar1.addMenu(dhtmlMenu);

// Comment out the next 2 lines and 4th line to get In The News off the menu 3-02
// 3rd line already commented out
//dhtmlMenu = new NavBarMenu(100, 120);
//dhtmlMenu.addItem(new NavBarMenuItem("In The News", "in_the_news.htm"));
//dhtmlMenu.addItem(new NavBarMenuItem("News.com", "http://www.news.com"));
//myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(100, 120);
dhtmlMenu.addItem(new NavBarMenuItem("About Us", "about_us.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Meet Us", "about_us.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Client Comments", "client_comments.htm"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(100, 120);
dhtmlMenu.addItem(new NavBarMenuItem("Contact Us", "contact_us.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Contact Info", "contact_us.htm"));
dhtmlMenu.addItem(new NavBarMenuItem("Service Request", "service_request.htm"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(100, 120);
dhtmlMenu.addItem(new NavBarMenuItem("Profile", "register_with_us.htm"));
myNavBar1.addMenu(dhtmlMenu);

//set menu colors
//myNavBar1.setColors("#000000", "#000000", "#C0C0C0", "#ffffff", "#666666", "#000000", "#cccccc", "#ffffff", "#000080")
myNavBar1.setColors("#000000", "#ffffff", "#990099", "#000000", "#00ff33", "#000000", "#cccccc", "#ffffff", "#000080")
myNavBar1.setSizes(1,3,1)

//uncomment below line to center the menu (valid values are "left", "center", and "right"
//myNavBar1.setAlign("center")
myNavBar1.moveTo(10,126)

var fullWidth;

function init() {

  // Get width of window, need to account for scrollbar width in Netscape.

  fullWidth = getWindowWidth() 
    - (isMinNS4 && getWindowHeight() < getPageHeight() ? 16 : 0);

  //myNavBar1.resize(fullWidth);
  myNavBar1.resize(0);

  myNavBar1.create();
  myNavBar1.setzIndex(2);
}
