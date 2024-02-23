const express = require('express');
const axios = require('axios');
const app = express();


const author = {
  name: 'Cecilia',
  lastname: 'Dominguez Ceballos'
};


app.get('/api/items', async (req, res) => {
    try {
      const query = req.query.q;
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
      const data = response.data;
     
      
      const items = data.results.map(item => ({
        
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: (item.price % 1 * 100).toFixed(0)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }));
      const categoryFilter = data.filters.find(filter => filter.id === 'category');
      const categories = categoryFilter ? categoryFilter.values[0].path_from_root.map(category => category.name) : [];

      res.json({
        author,
        categories,
        items
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  });

  app.get('/api/items/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
      const item = response.data;
      let categoriesFormatted = [];
      if (item.category_id) {
        const categoriesResponse = await axios.get(`https://api.mercadolibre.com/categories/${item.category_id}`);
        const categories = categoriesResponse.data;
        categoriesFormatted = categories.path_from_root.map(category => category.name);
      }

      let description = descriptionResponse.data.plain_text;
      if (!description) {
        description = 'No se encontró información al respecto';
      }
      let decimals = ((item.price % 1) * 100).toFixed(0);
      
   
      res.json({
        author,
        categories: categoriesFormatted,
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals:  decimals
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description,
        },
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el item' });
    }
  });


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});