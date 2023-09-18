/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
	let url = 'http://127.0.0.1:8000/items';
	fetch(url, {
	  method: 'get',
	})
	  .then((response) => response.json())
	  .then((data) => {
		data.items.forEach(item => insertList(item.artista, item.descricao, item.formato))
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
  const postItem = async (inputArtist, inputDescricao, inputFormato) => {
	const formData = new FormData();
	formData.append('artista', inputArtist);
	formData.append('descricao', inputDescricao);
	formData.append('formato', inputFormato);
	console.log(formData)
	let url = 'http://127.0.0.1:8000/item';
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
		const descricao = div.getElementsByTagName('td')[1].innerHTML
		if (confirm("Você tem certeza?")) {
		  div.remove()
		  deleteItem(descricao)
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
  const deleteItem = (desc) => {
	console.log(desc)
	let url = 'http://127.0.0.1:8000/item?descricao=' + desc;
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
	let inputDescricao = document.getElementById("newDescription").value;
	let inputFormato = document.getElementById("newFormat").value;
  
	if (inputArtist === '') {
	  alert("Escreva o nome de um novo item!");
	}else {
	  insertList(inputArtist, inputDescricao, inputFormato)
	  postItem(inputArtist, inputDescricao, inputFormato)
	  alert("Item adicionado!")
	}
  }
  
  
  /*
	--------------------------------------------------------------------------------------
	Função para inserir items na lista apresentada
	--------------------------------------------------------------------------------------
  */
  const insertList = (artista, descricao, formato) => {
	var item = [artista, descricao, formato]
	var table = document.getElementById('myTableWish');
	var row = table.insertRow();
  
	for (var i = 0; i < item.length; i++) {
	  var cel = row.insertCell(i);
	  cel.textContent = item[i];
	}
	insertButton(row.insertCell(-1))
	document.getElementById("newArtist").value = "";
	document.getElementById("newDescription").value = "";
	document.getElementById("newFormat").value = "";
  
	removeElement()
  }
