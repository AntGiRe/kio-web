import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import CategoriesList from "../views/CategoriesList";

export default function ProductsDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={openDrawer} className="block md:hidden">Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="flex flex-col">
        <div className="mb-2 flex flex-col items-center justify-between p-4">
          <div className="p-2">
            <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/logo500.png" className="w-48 mx-auto" alt="Imagen de la mascota de Fastie, es una hamburguesa animada" />
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex-grow">
          <CategoriesList/>
        </div>
        <div className="p-4">
          <Button color="red" className="w-full">Leave Order</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}