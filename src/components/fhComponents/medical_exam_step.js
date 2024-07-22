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
    label: '下载疫苗历史表格',
    description: '在上述官网教程找到 Student Immunization History Form',
  },
  {
    label: '前往国际旅行卫生保健中心或具有国际体检资格认证的医院进行体检和疫苗注射',
    description: '办理《国际旅行健康检查证明书》（小红本）和《国际预防接种证书》（小黄本）。 大家可以在网上查询当地保健中心或有资格认证的医院的地址。',
  },
  {
    label: '前往国际旅行卫生保健中心，按流程体检、注射疫苗（注意提前预约）。',
    description: '携带官网下载的表格和其他必须材料（看体检中心要求）前往国际旅行卫生保健中心，按流程体检、注射疫苗（注意提前预约）。可以带上小时候注射疫苗记录的小红本，如果已经注射过MMR并符合学校要求，医生会直接在疫苗表上签字盖章，就不用再注射疫苗。',
  },
  {
    label: '接种必须的疫苗，由医生填写表格',
    description: ``,
  },
  {
    label: '上传表格到SHC Portal',
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