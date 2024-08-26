const produtos = [
  {
    id: 1,
    name: "bala 7 belo",
    description: "bala de iogurte",
    price: 0.1,
    quantity_stock: 20,
    category_id: 1,
  },
  {
    id: 2,
    name: "trufa",
    description: "trufa de chocolate",
    price: 2.99,
    quantity_stock: 30,
    category_id: 1,
  },
  {
    id: 3,
    name: "pão",
    description: "pão de forma",
    price: 1.99,
    quantity_stock: 40,
    category_id: 2,
  },
  {
    id: 4,
    name: "leite",
    description: "leite integral",
    price: 2.99,
    quantity_stock: 50,
    category_id: 2,
  },
  {
    id: 5,
    name: "queijo",
    description: "queijo fresco",
    price: 3.99,
    quantity_stock: 60,
    category_id: 2,
  },
  {
    id: 6,
    name: "arroz",
    description: "arroz branco",
    price: 1.99,
    quantity_stock: 70,
    category_id: 3,
  },
  {
    id: 7,
    name: "bombom",
    description: "bombom sonho de valsa",
    price: 1.5,
    quantity_stock: 30,
    category_id: 1,
  },
];

function mostrar(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(`ID: ${products[i].id}, Nome: ${products[i].name}, 
    Descrição: ${products[i].description}, Preço: ${products[i].price},
    Quantidade: ${products[i].quantity_stock}, Categoria: ${products[i].category_id}`);
  }
}

produtos.forEach((value, index, array) => {
    console.log(`ID: ${value.id}, Nome: ${value.name}, 
        Descrição: ${value.description}, Preço: ${value.price},
        Quantidade: ${value.quantity_stock}, Categoria: ${value.category_id}`)
})

// mostrar(produtos);

// Criem uma funcao que irá apresentar no console
// todos os dados dos produtos registrados

// INSERT INTO tb_categories (name) VALUES('doce');
// INSERT INTO tb_categories (name) VALUE('salgados');
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bombom', 'bombom sonho de valsa', 1.50, 30, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bala de goma', 'bala de goma sortida', 0.90, 10, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('yakult', 'bebida leite fermentado', 10.90, 9, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('coxinha', 'bebida leite fermentado', 6.90, 4, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('salgadinho', 'salgadinho fofura', 5.99, 3, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('bala 7 belo', 'bala de tutti fruit', 0.1, 9, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('risole', 'risole de presunto e queijo', 8.43, 22, 2);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('suspiro', 'suspiro doce', 0.89, 0, 1);
// INSERT INTO tb_products (name, description, price,quantity_stock, category_id) VALUES('pé de moleque', 'pé de moleque doce', 3.20, 0, 9);
//

