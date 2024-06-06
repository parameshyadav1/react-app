import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Paper style={{ marginTop: 20 }}>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.body} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ItemList;
