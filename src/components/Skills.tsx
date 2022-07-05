import Box from "@mui/material/Box";
import { Card, CardContent, Typography } from "@mui/material";

const Skills = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card sx={{ width: 500 }}>
            <CardContent>
              <Typography variant="h6">言語</Typography>
              <Typography color="textSecondary">JavaScript / TypeScript</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card sx={{ width: 500 }}>
            <CardContent>
              <Typography variant="h6">フレームワーク</Typography>
              <Typography color="textSecondary">React</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
