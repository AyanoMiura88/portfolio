import Box from "@mui/material/Box";
import { createStyles } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const useStyles = () =>
  createStyles({
    root: {
      width: 730,
      maxWidth: "100%",
    },
  });

const Skills = () => {
  const classes: any = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">言語</Typography>
              <Typography color="textSecondary">Ruby / PHP / JavaScript / TypeScript</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">フレームワーク</Typography>
              <Typography color="textSecondary">
                Ruby on Rails / Sinatra / Laravel / React
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">データベース</Typography>
              <Typography color="textSecondary">MySQL / PostgreSQL</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">AWS</Typography>
              <Typography color="textSecondary">
                EC2 / ECS / ECR / Lambda / SQS / SNS / Elastic Beanstalk / S3 / Cloud9 / CloudWatch
                / CloudFormation / RDS / Route53
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Skills;