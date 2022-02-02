import React from "react";
import "./admin.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { iconButtonClasses } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";

const Input = styled("input")({
  display: "none",
});

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Admin() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="admin-body">
      {[" "].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <Grid container>
        <Grid item xs>
          <div className="admin-form">
            <div className="admin-form-heading">
              <h1>Upload to Blockchain</h1>
            </div>

            <form>
              <TextField
                fullWidth
                id="txnID"
                name="txnID"
                label="Transaction ID"
                variant="outlined"
                sx={{ margin: "1rem" }}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="orgName"
                name="orgName"
                label="Organization Name"
                variant="outlined"
                sx={{ margin: "1rem" }}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
              />
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button
                  sx={{ margin: "1rem", width: "10rem", marginLeft: "40%" }}
                  variant="contained"
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </form>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <div className="admin-form">
            <div className="admin-form-heading">
              <h1>Upload to Blockchain</h1>
            </div>

            <form>
              <TextField
                fullWidth
                id="txnID"
                name="txnID"
                label="Transaction ID"
                variant="outlined"
                sx={{ margin: "1rem" }}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="orgName"
                name="orgName"
                label="Organization Name"
                variant="outlined"
                sx={{ margin: "1rem" }}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
              />
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button
                  sx={{ margin: "1rem", width: "10rem", marginLeft: "40%" }}
                  variant="contained"
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
