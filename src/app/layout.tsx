import ThemeRegistry from "@/components/test/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Simple About us page",
  description: "Generate by Baitul Hikmah team",
};

// const DRAWER_WIDTH = 240;

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

/* 

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];
*/

/* 
<AppBar position="fixed" sx={{ zIndex: 2000 }}>
  <Toolbar sx={{ backgroundColor: "background.paper" }}>
    <DashboardIcon
      sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
    />
    <Typography variant="h6" color="text.primary">
      Next.js App Router
    </Typography>
  </Toolbar>
</AppBar>
<Drawer
  sx={{
    width: DRAWER_WIDTH,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: DRAWER_WIDTH,
      boxSizing: "border-box",
      top: ["48px", "56px", "64px"],
      height: "auto",
      bottom: 0,
    },
  }}
  variant="permanent"
  anchor="left"
>
  <Divider />
  <List>
    {LINKS.map(({ text, href, icon: Icon }) => (
      <ListItem key={href} disablePadding>
        <ListItemButton component={Link} href={href}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Divider sx={{ mt: "auto" }} />
  <List>
    {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Drawer> 

*/
