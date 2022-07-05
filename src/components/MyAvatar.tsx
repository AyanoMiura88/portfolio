import { Box, Avatar, Typography } from "@mui/material";

// 画像ファイルをインポート
import ImageFile from "../static/images/avatar.jpg";

const MyAvatar = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Avatar alt="Ayano Miura" src={ImageFile} sx={{ width: 300, height: 300 }} />
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
