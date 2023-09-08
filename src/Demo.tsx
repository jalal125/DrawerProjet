import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const closedDrawerWidth = 80;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `${closedDrawerWidth}px`,
  [theme.breakpoints.up("sm")]: {
    width: `${closedDrawerWidth}px`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const exemples = [
  {
    pair: "AB",
    commands: ["1999 : SNCF", "2005 : Google", "2010 : Apple"]
  },
  {
    pair: "GA",
    commands: ["2022 : Amazon", "2020 : Microsoft", "2021 : Facebook"]
  },
  {
    pair: "CD",
    commands: ["2015 : Tesla", "2018 : Netflix", "2023 : SpaceX"]
  },
  {
    pair: "EF",
    commands: ["2000 : Intel", "2012 : Airbnb", "2019 : Adobe"]
  },
  {
    pair: "HI",
    commands: ["2003 : PayPal", "2009 : Twitter", "2016 : Uber"]
  },
  {
    pair: "JK",
    commands: ["2004 : eBay", "2011 : LinkedIn", "2017 : Spotify"]
  },
  {
    pair: "LM",
    commands: ["2002 : Oracle", "2008 : Airbnb", "2015 : Pinterest"]
  },
  {
    pair: "NO",
    commands: ["2001 : Yahoo", "2007 : Instagram", "2014 : WhatsApp"]
  },
  {
    pair: "PQ",
    commands: ["1998 : Alibaba", "2006 : YouTube", "2013 : Dropbox"]
  },
  {
    pair: "RS",
    commands: ["1995 : Nokia", "2004 : Skype", "2012 : WhatsApp"]
  }
];

const tableauDonnees = [
  {
    client: "N°1 John",
    adress: "123 Main St",
    expedition: "Shipped",
    actions: "Edit"
  },
  {
    client: "N°2 Jane",
    adress: "456 Elm St",
    expedition: "Pending",
    actions: "Edit"
  },
  {
    client: "N°3 Bob",
    adress: "789 Oak St",
    expedition: "Delivered",
    actions: "Edit"
  }
  // Ajoutez d'autres données ici
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Lec
          </Typography>
          {/* Barre de recherche */}
          <TextField
            label="Rechercher"
            variant="outlined"
            size="small"
            sx={{ marginLeft: "auto", backgroundColor: "white" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {exemples.map((item) => (
            <div key={item.pair}>
              <ListItem
                disablePadding
                sx={{
                  minHeight: 48,
                  justifyContent: "flex-end",
                  px: 2.5,
                  textAlign: "center"
                }}
                onClick={() => {
                  setSelectedPair(item.pair);
                  setSelectedCommand(null); // Réinitialise la commande sélectionnée
                  handleDrawerOpen();
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "flex-end",
                    px: 2.5
                  }}
                >
                  <ListItemText primary={item.pair} />
                </ListItemButton>
              </ListItem>
              {selectedPair === item.pair && open && (
                <List sx={{ paddingLeft: theme.spacing(4) }}>
                  {item.commands.map((command, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      sx={{
                        minHeight: 48,
                        justifyContent: "flex-start"
                      }}
                      onClick={() => {
                        setSelectedCommand(command); // Met à jour la commande sélectionnée
                      }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "flex-start"
                        }}
                      >
                        <ListItemText primary={`N°${command}`} />{" "}
                        {/* Ajout de "N°" devant la commande */}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {selectedCommand && (
          <TableauDonnees selectedCommand={selectedCommand} />
        )}
      </Box>
    </Box>
  );
}

function TableauDonnees({ selectedCommand }) {
  // Filtrer les données en fonction de la commande sélectionnée
  const filteredData = tableauDonnees.filter((row) =>
    row.client.includes(selectedCommand)
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>N°Client</TableCell>
            <TableCell>Adress</TableCell>
            <TableCell>Expedition</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.client}>
              <TableCell>{row.client}</TableCell>
              <TableCell>{row.adress}</TableCell>
              <TableCell>{row.expedition}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary">
                  {row.actions}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
