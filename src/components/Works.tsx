import React from "react";
import { createStyles, styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";

const useStyles = styled((theme: Theme) =>
  createStyles({
    root: {
      width: 770,
      maxWidth: "100%",
    },
  })
);
function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
const Works: React.FC = () => {
  const classes: any = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <List className={classes.root}>
            <ListItem>
              {
                // GitHubリポジトリなどのURLを貼る
              }
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                {
                  // 「primary」に作品名、「secondary」に説明文を書く
                }
                <ListItemText primary="Work1" secondary="Work1です。" />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work2" secondary="Work2です。" />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work3" secondary="Work3です。" />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Works;
