import "../Navbar/Navbar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

export default function DropDown({ title, details }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="nav-tab" component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {details.map((item, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper"
                }}
              >
                <Typography component="span">
                  {item.subtitle}
                </Typography>
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      {/* <ListItemButton> */}
                        <ListItemText primary={item.items.tabname} />
                        <ListItemIcon>
                          <Icon>{item.items.icon} </Icon>
                        </ListItemIcon>
                      {/* </ListItemButton> */}
                    </ListItem>
                  </List>
                </nav>
                <Divider />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
