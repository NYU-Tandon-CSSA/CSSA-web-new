import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

// css
import '../css/about.css'

import Visa from '../components/fhComponents/visa'
import Rent from '../components/fhComponents/rent'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FreshmanHandbook() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{marginBottom: "8%"}}>
        <ul class="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div style={{paddingTop: "130px", minHeight:"90vh"}}>
          <Typography class = 'Silkscreen' style={{textAlign:"center", fontSize:"200%"}}>Freshman Handbook</Typography>
          <Box sx={{ width: '100%'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    sx={{ '.MuiTabs-flexContainer': {justifyContent: 'center',}}
                    }>
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="签证 Visa" {...a11yProps(0)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="行前准备 Pack" {...a11yProps(1)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="海关" {...a11yProps(2)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="租房" {...a11yProps(3)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="交通" {...a11yProps(4)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="电话卡 / 银行卡" {...a11yProps(5)} />
                <Tab style={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.3rem'}} label="学术" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Visa/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Xi
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Winnie
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Rent/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              Alex
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              Helen
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              yi
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              Li
            </CustomTabPanel>
          </Box>
          {/* <Typography class = 'Silkscreen' style={{textAlign:"center", fontSize:"200%"}}>Prerequisites</Typography>         */}
        </div>
      </Container>
    </div>
  );
}
