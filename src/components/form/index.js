import React, {useState, useEffect, useRef} from 'react';
import { Box } from '@chakra-ui/react';
import ConsultationForm from "./consultationForm"

const FormikWrapper = () => {
  const inputEl = useRef(null);
  const [p29ContentOne, setP29ContentOne] = useState("");
  const [p29ContentTwo, setP29ContentTwo] = useState("");
  const [p30ContentOne, setP30ContentOne] = useState("");
  const [p30ContentTwo, setP30ContentTwo] = useState("");

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    let words = text.split(' ');
    let line = '';

    for(let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  useEffect(() => {

    let canvasP29ContentOne = document.getElementById('p29ContentOne')
    let canvasP29ContentTwo = document.getElementById('p29ContentTwo')
    let canvasP30ContentOne = document.getElementById('p30ContentOne')
    let canvasP30ContentTwo = document.getElementById('p30ContentTwo')

    let scale = window.devicePixelRatio

    canvasP29ContentOne.width = Math.floor(500 * scale);
    canvasP29ContentOne.height = Math.floor(150 * scale);

    canvasP29ContentTwo.width = Math.floor(500 * scale);
    canvasP29ContentTwo.height = Math.floor(150 * scale);

    canvasP30ContentOne.width = Math.floor(500 * scale);
    canvasP30ContentOne.height = Math.floor(150 * scale);

    canvasP30ContentTwo.width = Math.floor(500 * scale);
    canvasP30ContentTwo.height = Math.floor(150 * scale);

    let ctx = canvasP29ContentOne.getContext("2d");
    ctx.scale(scale, scale)
    ctx.font = '6pt NotoSans-Regular';
    ctx.fillStyle = '#000';

    let ctx2 = canvasP29ContentTwo.getContext("2d");
    ctx2.scale(scale, scale)
    ctx2.font = '6pt NotoSans-Regular';
    ctx2.fillStyle = '#000';

    let ctx3 = canvasP30ContentOne.getContext("2d");
    ctx3.scale(scale, scale)
    ctx3.font = '6pt NotoSans-Regular';
    ctx3.fillStyle = '#000';

    let ctx4 = canvasP30ContentTwo.getContext("2d");
    ctx4.scale(scale, scale)
    ctx4.font = '8pt NotoSans-Regular';
    ctx4.fillStyle = '#000';

    wrapText(ctx, `第一階段相關措施簡易，現時大部分餐廳亦已推行此類措施， 堂食不提供即棄膠餐具，第一階段應推前至2023年實施，加快走塑步伐。`, 0, 60, 400, 12);
    wrapText(ctx2, `在疫情下，食肆外賣大增，署方居然未有訂立實施第二階段的確實時間表， 期望政府勿再虛耗光陰。署方須承諾第二階段推前至2025年實施， 在減廢路上急起直追。`, 0, 60, 300, 12);
    wrapText(ctx3, `署方須同時管制餐飲業處所外預先包裝的食品所附帶的即棄膠餐具， 未來積極禁止此類食品附帶即棄餐具。政府亦應密切留意並適時作出措施避免餐飲業界， 進一步拓展餐飲業處所外預先包裝食品的業務，以真正杜絕膠餐具生產及使用。`, 0, 60, 400, 12);
    wrapText(ctx4, `署方須積極推動及協助業界提供可重用餐具租借配套，同時訂立清晰時間表及各階段目標， 真正落實並鼓勵市民在日常生活中使用可重用餐具，避免因管制即棄塑膠餐具而增加其他即棄餐具 （如：紙、竹）的垃圾量，達至真正源頭減廢。`, 0, 60, 400, 16);

    if(inputEl){
      setTimeout(function(){
        setP29ContentOne(canvasP29ContentOne.toDataURL('image/svg'))
        setP29ContentTwo(canvasP29ContentTwo.toDataURL('image/svg'))
        setP30ContentOne(canvasP30ContentOne.toDataURL('image/svg'))
        setP30ContentTwo(canvasP30ContentTwo.toDataURL('image/svg'))
      }, 200);
    }
  }, []);
  return (
    <Box ref={inputEl}>
    <canvas id="p29ContentOne" style={{display: 'none'}}></canvas>
    <canvas id="p29ContentTwo" style={{display: 'none'}}></canvas>
    <canvas id="p30ContentOne" style={{display: 'none'}}></canvas>
    <canvas id="p30ContentTwo" style={{display: 'none'}}></canvas>
    <ConsultationForm p29ContentOne={p29ContentOne} p29ContentTwo={p29ContentTwo} p30ContentOne={p30ContentOne} p30ContentTwo={p30ContentTwo}/>
  </Box>);
};

export default FormikWrapper;
