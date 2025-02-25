import DashboardIcon from "../components/DashboardIcon";
import ProductsIcon from "../components/ProductsIcon";
import UsersIcon from "../components/UsersIcon";
// import InboxIcon from "../components/InboxIcon";
// import BookingsIcon from "../components/BookingsIcon";
// import CalendarIcon from "../components/CalendarIcon";
// import ReviewsIcon from "../components/ReviewsIcon";
// import AnalyticsIcon from "../components/AnalyticsIcon";
// import AuditIcon from "../components/AuditIcon";
// import SettingsIcon from "../components/SettingsIcon";

const pageRoutes = [

    {
        name: "Dashboard",
        path: "/dashboard",
        icon: (isActive) => <DashboardIcon color={isActive ? "#0014CC" : "#101828"} />,
      },
      
      {
        name: "Users",
        path: "users",
        icon: (isActive) => <UsersIcon color={isActive ? "#0014CC" : "#101828"} />,
      },

      {
        name: "Products",
        path: "products",
        icon: (isActive) => <ProductsIcon color={isActive ? "#0014CC" : "#101828"} />,
      },


      // {
      //   name: "Inbox",
      //   path: "/inbox",
      //   icon: (isActive) => <InboxIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Bookings",
      //   path: "/bookings",
      //   icon: (isActive) => <BookingsIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Calendar",
      //   path: "/calendar",
      //   icon: (isActive) => <CalendarIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Reviews & Ratings",
      //   path: "/reviews",
      //   icon: (isActive) => <ReviewsIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Analytics",
      //   path: "/analytics",
      //   icon: (isActive) => <AnalyticsIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Order List",
      //   path: "/order_list",
      //   icon: (isActive) => <AnalyticsIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Audit Logs",
      //   path: "/audit_logs",
      //   icon: (isActive) => <AuditIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

      // {
      //   name: "Settings",
      //   path: "/settings",
      //   icon: (isActive) => <SettingsIcon color={isActive ? "#0014CC" : "#101828"} />,
      // },

];

export default pageRoutes;

