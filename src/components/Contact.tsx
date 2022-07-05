import { Avatar, Box, Typography, Link } from "@mui/material";
import { Mail, Twitter, GitHub } from "@mui/icons-material/";

const Contact = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Contact</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Link href="#" color="inherit">
            <Avatar sx={{ backgroundColor: "pink", marginRight: 2 }}>
              <Mail />
            </Avatar>
          </Link>
          <Link href="#" color="inherit">
            <Avatar sx={{ backgroundColor: "#00acee" }}>
              <Twitter />
            </Avatar>
          </Link>
          <Link href="#" color="inherit">
            <Avatar sx={{ backgroundColor: "#171515", marginLeft: 2 }}>
              <GitHub />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
