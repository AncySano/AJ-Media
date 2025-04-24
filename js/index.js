// clickjacking protection script locally
if (window.top !== window.self) {
  // Page is embedded in an iframe → prevent it
  window.top.location = window.self.location;
}
// Set the current Date
jQuery(document).ready(function () {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  jQuery("#Date").html(
    dayNames[newDate.getDay()] +
      ", " +
      monthNames[newDate.getMonth()] +
      " " +
      newDate.getDate() +
      ", " +
      newDate.getFullYear()
  );
  jQuery("#update_date").html(
    dayNames[newDate.getDay()] +
      ", " +
      monthNames[newDate.getMonth()] +
      " " +
      newDate.getDate() +
      ", " +
      newDate.getFullYear()
  );
});
// Font families
WebFont.load({
  google: {
    families: [
      "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
      "Oswald:200,300,400,500,600,700",
      "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
      "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
      "EB Garamond:regular,500,600,700,800,italic,500italic,600italic,700italic,800italic",
      "Roboto:regular,italic,500,700,900",
      "Poppins:regular,500,600,700,800,900",
    ],
  },
});
