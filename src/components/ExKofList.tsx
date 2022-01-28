import { Box, Button, Paper, Stack } from "@mui/material";
import React, { FC } from "react";
import { KoversKofItem } from "../types/types";
import classes from './ExCofList.module.css';


interface ExKofListProps {
  list: KoversKofItem[];
  remove: (id: KoversKofItem) => void;
}


const ExKofList = (props: ExKofListProps) => {
  return (
    <div><Stack spacing={2}>
      {
        props.list.map((item, idx) => (
          <Paper key={idx} className={classes.MyPaper}>{item.name}, {item.value}<Button onClick={() => props.remove(item)}>Удалить</Button></Paper>
        )
        )
      }
    </Stack></div>
  )
}

export default ExKofList;