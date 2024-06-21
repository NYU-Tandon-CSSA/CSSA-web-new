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
    label: 'SEVIS缴费并打印凭证',
    description: `根据I-20上的内容完成表格的填写并缴纳SEVIS费，一般信用卡即可支付，支付完成后打印电子收据并备用。`,
  },
  {
    label: '填写DS-160并打印',
    description:
      'DS-160表格是每一位签证申请人包括儿童在内，都必须完成的一份签证申请表。DS-160采用在线填写的方式，并需要上传符合美国签证照片格式的电子照片。只有在填写完DS-160表并获得确认页上的条形码编号后，才可以申请预约大使馆面谈。',
  },
  {
    label: '选择 Albert Login',
    description: ``,
  },
  {
    label: '选择 Applicants',
    description: ``,
  },
  {
    label: '选择 Applicant Status',
    description: ``,
  },
  {
    label: '选择 Admission Offer',
    description: ``,
  },
  {
    label: '点击 Accept',
    description: ``,
  },
  {
    label: '在截止日期前缴纳 Deposit',
    description: ``,
  },
];

const CustomStepIcon = styled(StepIcon)(({ theme }) => ({
  '& .MuiStepIcon-text': {
    fill: 'd3b4f8', // 数字颜色
  },
  '&.Mui-active': {
    color: 'd3b4f8', // active步骤图标颜色
  },
  '&.Mui-completed': {
    color: '#d3b4f8', // 完成步骤图标颜色
  },
}));

export default function OfferSteps() {
  return (
    <Box sx={{ maxWidth: 500, ml: 4}}>
      <Stepper orientation="vertical" activeStep={steps.length}>
        {steps.map((step, index) => (
          <Step key={step.label} active>
            <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
