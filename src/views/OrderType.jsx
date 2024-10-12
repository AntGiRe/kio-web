import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  HomeIcon
} from "@heroicons/react/24/solid";
 
export function OrderType() {
  const data = [
    {
      label: "Eat here",
      value: "dashboard",
      icon: BuildingStorefrontIcon,
      desc: `Your order, which will be enjoyed here, 
      will be placed on a tray that you must pick up at the counter.`,
    },
    {
      label: "Take away",
      value: "profile",
      icon: ShoppingBagIcon,
      desc: `Your order, which will be enjoyed outside our establishment, 
      will be placed in a takeaway bag that you must pick up at the counter.`,
    },
    {
        label: "Delivery",
        value: "delivery",
        icon: HomeIcon,
        desc: `Your order will be delivered to your home by one of our delivery 
        drivers. Just take a seat and wait for it.`,
    },
  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}