window.onload = function () {
    getAllProducts();

    document.getElementById('saveBtn').onclick = saveProduct;
}

async function getAllProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    console.log(products);
    let html = `
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Price</th>
    <th>Description</th>
    <th>Actions</th>
    </tr>
   `;

    products.forEach(prod => {
        html += `
        <tr id="tr${prod.id}">
        <td>${prod.id}</td>
        <td>${prod.title}</td>
        <td>${prod.price}</td>
        <td>${prod.description}</td>
        <td>
        <button onclick="deleteProdById(${prod.id});">DELETE</button>
        <button onclick="editProdById(${prod.id});">EDIT</button>
        </td>
    </tr>
     `
    })

    document.getElementById('products').innerHTML = html;
}

async function deleteProdById(id) {
    console.log('----' + id);
    const response = await fetch('http://localhost:3000/products/' + id, {
        method: 'DELETE'
    });
    if (response.ok) {
        // getAllProducts();
        document.getElementById(`tr${id}`).remove();
    }
}

async function editProdById(id) {
    console.log("editing", id);
    const formHeader = document.getElementById("formHeader");
    formHeader.innerHTML = `Editing product id: ${id}`;

    let form = document.getElementById("productSaveForm");
    form.innerHTML = `
        <p>id: <input id="id"/></p>
        <p>title: <input id="title"/></p>
        <p>price: <input id="price" type="number"/></p>
        <p>Description: <textarea id="description"></textarea></p>
        <button id="saveBtn">Save</button>`;



    const response = await fetch('http://localhost:3000/products/' + id, {
        method: 'GET'
    });
    const product = await response.json();
    if (response.ok) {
        // getAllProducts();
        console.log(product);
        let id = product.id;
        let title = product.title;
        let price = product.price;
        let description = product.description;

        //put values in fields
        document.getElementById("id").value = id;
        document.getElementById("title").value = title;
        document.getElementById("price").value = price;
        document.getElementById("description").value = description;
        console.log(title, price, description);
        
        //read values from the fields
        document.getElementById('saveBtn').onclick = saveEdit(id, title, price, description);

    }

    function saveEdit(id, title, price, description) {
        return (function () {
            console.log("sending")
            // id = document.getElementById("id").value;
            title = document.getElementById("title").value;
            price = document.getElementById("price").value;
            description = document.getElementById("description").value;
            console.log(title, price, description);

            // event.preventDefault();

            fetch('http://localhost:3000/products/', {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    title,
                    price,
                    description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(prod => {

                    const newRow = `
                    <tr id="tr${prod.id}">
                    <td>${prod.id}</td>
                    <td>${prod.title}</td>
                    <td>${prod.price}</td>
                    <td>${prod.description}</td>
                    <td>
                    <button onclick="deleteProdById(${prod.id});">DELETE</button>
                    <button onclick="editProdById(${prod.id});">EDIT</button>
                    </td>
                </tr>`;

                    document.getElementById('products').innerHTML += newRow;
                    // getAllProducts();

                    document.getElementById('productSaveForm').reset();
                })
                .catch(err => console.log(err));



        })

    }

    // console.log(formHeader.innerHTML);
}

function saveProduct(event) {
    console.log("first save")
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            title,
            price,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(prod => {

            const newRow = `
                    <tr id="tr${prod.id}">
                    <td>${prod.id}</td>
                    <td>${prod.title}</td>
                    <td>${prod.price}</td>
                    <td>${prod.description}</td>
                    <td>
                    <button onclick="deleteProdById(${prod.id});">DELETE</button>
                    <button onclick="editProdById(${prod.id});">EDIT</button>
                    </td>
                </tr>`;

            document.getElementById('products').innerHTML += newRow;
            // getAllProducts();

            document.getElementById('productSaveForm').reset();
        })
        .catch(err => console.log(err));

}