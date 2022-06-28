import { createStyles, styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// 画像ファイルをインポート
import ImageFile from "../static/images/avatar.jpg";

const useStyles = styled((theme: Theme) =>
  createStyles({
    // 表示サイズを指定
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  })
);

const MyAvatar = () => {
  const classes: any = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Avatar alt="Ayano Miura" src={ImageFile} className={classes.large} />
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Ayano Miura</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1">Web Enginner</Typography>
        </Box>
      </Box>
    </>
  );
};

export default MyAvatar;
