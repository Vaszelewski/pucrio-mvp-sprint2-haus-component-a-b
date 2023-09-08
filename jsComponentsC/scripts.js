/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/items';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach(item => insertList(item.artista, item.nomeDoItem, item.formato, item.anoLancamento, item.pais, item.notas, item.valor, item.codigoBarras))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputArtist, inputNomeDoItem, inputFormato, inputAno, inputPais, inputNotas, inputValor,inputCodigoBarras) => {
  const formData = new FormData();
  formData.append('artista', inputArtist);
  formData.append('nomeDoItem', inputNomeDoItem);
  formData.append('formato', inputFormato);
  formData.append('anoLancamento', inputAno);
  formData.append('pais', inputPais);
  formData.append('notas', inputNotas);
  formData.append('valor', inputValor);
  formData.append('codigoBarras', inputCodigoBarras);
  console.log(formData)
  let url = 'http://127.0.0.1:5000/item';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}


/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const codigoBarras = div.getElementsByTagName('td')[7].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(codigoBarras)
        alert("Removido!")
      }
    }
  }
}


/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (cod) => {
  console.log(cod)
  let url = 'http://127.0.0.1:5000/item?codigoBarras=' + cod;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com Artista, Nome do Item, Formato, Ano de Lançamento, Pais, Notas/Descrição e Valor
  --------------------------------------------------------------------------------------
*/
const newItem = () => {
  let inputArtist = document.getElementById("newArtist").value;
  let inputNomeDoItem = document.getElementById("newName").value;
  let inputFormato = document.getElementById("newFormat").value;
  let inputAno = document.getElementById("newRelease").value;
  let inputPais = document.getElementById("newCountry").value;
  let inputNotas = document.getElementById("newNotes").value;
  let inputValor = document.getElementById("newPrice").value;
  let inputCodigoBarras = document.getElementById("newBarCode").value;

  if (inputArtist === '') {
    alert("Escreva o nome de um novo item!");
  } else if (isNaN(inputAno)) {
    alert("Insira apenas números no Ano de Lançamento!");
  } else if (isNaN(inputValor)){
	alert("Insira apenas números no Valor!");
	} else if (isNaN(inputCodigoBarras)){
	alert("Insira apenas números no Código de Barras!");
  }else {
    insertList(inputArtist, inputNomeDoItem, inputFormato, inputAno, inputPais, inputNotas, inputValor, inputCodigoBarras)
    postItem(inputArtist, inputNomeDoItem, inputFormato, inputAno, inputPais, inputNotas, inputValor, inputCodigoBarras)
    alert("Item adicionado!")
  }
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (artista, nomeDoItem, formato, anoLancamento, pais, notas, valor, codigoBarras) => {
  var item = [artista, nomeDoItem, formato, anoLancamento, pais, notas, valor, codigoBarras]
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1))
  document.getElementById("newArtist").value = "";
  document.getElementById("newName").value = "";
  document.getElementById("newFormat").value = "";
  document.getElementById("newRelease").value = "";
  document.getElementById("newCountry").value = "";
  document.getElementById("newNotes").value = "";
  document.getElementById("newPrice").value = "";
  document.getElementById("newBarCode").value = "";

  removeElement()
}