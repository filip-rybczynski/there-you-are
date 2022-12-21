import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Box,
  Card,
  FormControl,
  Grid,
  GridProps,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  IconButton,
  CardActionArea,
  FormControlLabel,
  Switch,
  ButtonGroup,
  Button,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import "./App.scss";

function* increment(i: number) {
  while (true) {
    yield i++;
  }
}

const newNumber = increment(0);

const dummyState = {
  searchText: "",
  importantFilterOn: false,
  items: [
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Wa0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Wa0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Dr0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Dr0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Dr0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Ca0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Tr0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Tr0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Tr0002",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Sh0002",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Bo0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Bo0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Bo0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Bo0001",
    },
    {
      type: "item",
      name: "Item" + newNumber.next().value,
      id: "I_It000" + newNumber.next().value,
      parentId: "F_Bo0001",
    },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
    // {
    //   type: "item",
    //   name: "Item" + newNumber.next().value,
    //   id: "I_It000" + newNumber.next().value,
    //   parentId: "F_Bo0001",
    // },
  ],
  furniture: [
    {
      type: "furniture",
      subtype: "wardrobe",
      name: "Big wardrobe",
      id: "F_Wa0001",
      parentId: "R_B0001",
    },
    {
      type: "furniture",
      subtype: "drawer",
      name: "Drawer under bed",
      id: "F_Dr0001",
      parentId: "R_B0001",
    },
    {
      type: "furniture",
      subtype: "bookshelf",
      name: "Bookshelf",
      id: "F_Bo0001",
      parentId: "R_B0001",
    },
    {
      type: "furniture",
      subtype: "trunk",
      name: "Black trunk",
      id: "F_Tr0001",
      parentId: "R_B0001",
    },
    {
      type: "furniture",
      subtype: "cabinet",
      name: "Cabinet",
      id: "F_Ca0001",
      parentId: "R_LR0001",
    },
    {
      type: "furniture",
      subtype: "bookshelf",
      name: "Bookshelf",
      id: "F_Bo0002",
      parentId: "R_LR0001",
    },
    {
      type: "furniture",
      subtype: "trunk",
      name: "Pink trunk",
      id: "F_Tr0002",
      parentId: "R_LR0001",
    },
    {
      type: "furniture",
      subtype: "shelf",
      name: "Shelf with stuff",
      id: "F_Sh0002",
      parentId: "R_K0001",
    },
  ],
  rooms: [
    {
      type: "room",
      name: "Bedroom",
      id: "R_B0001",
    },
    {
      type: "room",
      name: "Living Room",
      id: "R_LR0001",
    },
    {
      type: "room",
      name: "Kitchen",
      id: "R_K0001",
    },
  ],
  // // controlled inputs
  // typeInputValue: "",
  // nameInputValue: "",
  // parentInputValue: "",
  // toggleImportantValue: "",
};

function App() {
  const [typeFieldValue, setTypeFieldValue] = useState("");

  console.dir(dummyState);

  const dummyOptions = [
    { label: "Room1", id: "r1" },
    { label: "Room2", id: "r2" },
    { label: "Container1", id: "c2" },
  ];

  const gridFlexParams: GridProps = {
    container: true,
    spacing: 2,
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  };

  return (
    <div className="App">
      <Grid {...gridFlexParams} sx={{ margin: "0 auto", width: 0.8 }}>
        <Grid item xs>
          <Typography variant="h2" component="h1" gutterBottom>
            There you are!
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ minWidth: 0.8 }}>
          <Paper sx={{ py: 4, px: 6 }}>
            <form>
              <Grid {...gridFlexParams}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Add new
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select-type">Type</InputLabel>
                    <Select
                      labelId="select-type"
                      label="Type"
                      value={typeFieldValue}
                    >
                      <MenuItem value="item">Item</MenuItem>
                      <MenuItem value="container">Container</MenuItem>
                      <MenuItem value="room">Room</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={9} >
                  <TextField variant="outlined" label="Name" required sx={{width: 1}}/>
                </Grid>
                {/* sub type: https://mui.com/material-ui/react-autocomplete/#search-input */}
                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    label="Sub-type"
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Autocomplete
                    options={dummyOptions}
                    renderInput={(params) => (
                      <TextField {...params} label="Parent" />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Switch defaultChecked={false} />}
                    label="Important?"
                  />
                </Grid>
                <Grid item xs={4} >
                <Button type="submit" variant="contained" sx={{width: 1, height: 1}}>
                  Add
                </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          
          <Paper>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={5}>

            <TextField variant="outlined" label="Search" sx={{width: 1, m: 1}}/>
            </Grid>
            <Grid item xs={3}>
              
            
            <FormControlLabel
              control={<Switch defaultChecked={false} />}
              label="Only important"
            />
            </Grid>
            <Grid item xs={4}>

            <ButtonGroup variant="contained">
              <Button>Show all</Button>
              <Button>Collapse all</Button>
            </ButtonGroup>
            </Grid>

          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ width: "100%" }}>
            {dummyState.rooms.map((room) => (
              <Card>
                <CardActionArea>
                  <Typography variant="h4" component="h3" gutterBottom>
                    {room.name}
                  </Typography>
                </CardActionArea>
                {dummyState.furniture.map((furn) =>
                  furn.parentId === room.id ? (
                    <Accordion
                    // TransitionProps={{ unmountOnExit: true }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" component="h4" gutterBottom>
                          {furn.name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List component="ul" dense>
                          {dummyState.items.map((item) =>
                            item.parentId === furn.id ? (
                              <ListItem
                                divider
                                secondaryAction={
                                  <Box component="span">
                                    <IconButton edge="end" aria-label="delete">
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                    </IconButton>
                                  </Box>
                                }
                              >
                                <ListItemText primary={item.name} />
                              </ListItem>
                            ) : (
                              []
                            )
                          )}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ) : null
                )}
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
