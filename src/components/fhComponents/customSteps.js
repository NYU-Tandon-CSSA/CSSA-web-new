import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepIcon from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';

const steps = [
  {
    label: '下飞机，跟随机场指示前往海关大厅',
    description: '',
  },
  {
    label: '到达海关大厅，排队准备入境。',
    description: '排队过程中提前把护照、I-20等文件拿出来。',
  },
  {
    label: '在入境闸口处接受海关人员询问，检查必要文件',
    description: ``,
  },
  {
    label: '询问结束，接受指纹录入',
    description: ``,
  },
  {
    label: '取行李',
    description: ``,
  },
  {
    label: '海关检查',
    description: ``,
  },
  {
    label: '入境完成',
    description: ``,
  },
];

const CustomStepIcon = styled(StepIcon)(({ theme }) => ({
  '& .MuiStepIcon-text': {
    fill: '#af7ac5', // 数字颜色
  },
  '&.Mui-active': {
    color: '#af7ac5', // active步骤图标颜色
  },
  '&.Mui-completed': {
    color: '#af7ac5', // 完成步骤图标颜色
  },
}));

export default function CustomSteps() {
  return (
    <Box sx={{ maxWidth: 500, ml: 4 }}>
      <Stepper orientation="vertical" activeStep={steps.length}>
        {steps.map((step, index) => (
          <Step key={step.label} active>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <Typography variant="h8">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" sx={{ ml: 2 }}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}