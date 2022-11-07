current = 0;
function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    current++; 
    td.innerText = current;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    a = document.createElement('a')
    a.innerText = 'enlace'
    a.href = 'http://localhost/edit/' + current
    td.appendChild(a)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}