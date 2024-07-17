import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// cover images
import picture2 from '../images/fhImage/2.jpg';

// css
import "../css/about.css";

import Visa from "../components/fhComponents/visa";
import Rent from "../components/fhComponents/rent";
import Transport from "../components/fhComponents/transport";
import Customs from "../components/fhComponents/customs";
import SimCard from "../components/fhComponents/simCard";
import BankCard from "../components/fhComponents/bankcard";
import Academic from "../components/fhComponents/academic";
import { useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%", overflowX: "auto" }}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "row" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FreshmanHandbook() {
  const { pageInd } = useParams();
  const [value, setValue] = React.useState(pageInd ? parseInt(pageInd) : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Box sx={{ width: "100%", padding: 0, margin: 0, marginTop: '64px', height: '80vh', backgroundColor: '#E6E6FA' }}>
        <Box sx={{ display: 'flex', height: '100%', width: '100%', margin: 0, padding: 0 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 2 }}>
            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
              新生手册
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginTop: 4}}>
              欢迎大家加入NYU Tandon！
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginTop: 2}}>
              希望这份手册能够帮助大家更好地准备你的留学旅程。
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
              内容仅供参考，请配合相关政府官网和NYU官网信息食用。
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <img src={picture2} alt="图片1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ marginBottom: "8%", paddingTop: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="basic tabs example"
              sx={{ ".MuiTabs-flexContainer": { justifyContent: isMobile ? "left" : "center" } }}
            >
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="签证"
                {...a11yProps(0)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="行前准备"
                {...a11yProps(1)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="海关"
                {...a11yProps(2)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="租房"
                {...a11yProps(3)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="交通"
                {...a11yProps(4)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="电话卡"
                {...a11yProps(5)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="银行卡"
                {...a11yProps(6)}
              />
              <Tab
                style={{ fontFamily: "YouSheBiaoTiHei", fontSize: "1.3rem" }}
                label="学术"
                {...a11yProps(7)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} id="visa">
            <Visa />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} id="pack">
            Xi
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Customs />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Rent />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Transport />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <SimCard />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <BankCard />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            <Academic />
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
}

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FreshmanHandbook />
    </ThemeProvider>
  );
}

export default App;
