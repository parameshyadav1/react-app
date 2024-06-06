import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import theme from './theme';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Material-UI App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SearchBar setSearchTerm={setSearchTerm} />
        <ItemList items={filteredItems} />
      </Container>
    </ThemeProvider>
  );
};

export default App;

