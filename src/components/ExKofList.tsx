import { Box, Button, Paper, Stack } from "@mui/material";
import React, { FC } from "react";
import { KoversKofItem } from "../types/types";


interface ExKofListProps {
  list: KoversKofItem[];
}


const ExKofList = ({ list }: ExKofListProps) => {
  console.log(list);

  return (
    <div><Stack spacing={2}>
      {
        list.map((item, idx) => (
          <Paper key={idx}>{item.name}, {item.value}<Button>Удалить</Button></Paper>
        )
        )
      }
    </Stack></div>
  )
}

export default ExKofList;