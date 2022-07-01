import { createStyles, styled, Theme } from "@mui/material/styles";
import { Avatar, Box, Typography, Link } from "@mui/material";
import { green, blue, purple } from "@mui/material/colors";
import { Mail, Twitter, GitHub } from "@mui/icons-material/";

const useStyles = styled((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    green: {
      color: "#fff",
      backgroundColor: green[500],
    },
    blue: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
    },
    purple: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
    },
  })
);
const Contact = () => {
  const classes: any = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Contact</Typography>
        </Box>
        <Box className={classes.root} display="flex" justifyContent="center" p={1}>
          <Link href="#" color="inherit">
            <Avatar className={classes.green}>
              <Mail />
            </Avatar>
          </Link>
          <Link href="#" color="inherit">
            <Avatar className={classes.blue}>
              <Twitter />
            </Avatar>
          </Link>
          <Link href="#" color="inherit">
            <Avatar className={classes.purple}>
              <GitHub />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
