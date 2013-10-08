function getUserList(page) {
  var page = page || 1,
      xhr = new XMLHttpRequest();

  xhr.onload = function UpdateUserList() {
    var table,
        tbody = document.querySelector('tbody'),
        tr,
        td,
        li,
        data,
        elements,
        i;

    if (!tbody) return;

    data = JSON.parse(this.responseText);

    // Remove it first
    table = tbody.parentNode;
    table.removeChild(tbody);
    tbody = document.createElement('tbody');

    // Create new tbody to fill new data
    for (i = 0; i < data.length; ++i) {
      tr = document.createElement('tr');

      td = document.createElement('td');
      td.innerHTML = i + 1;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = data[i].firstName;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = data[i].lastName;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = data[i].ID;
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    // Update pagination
    li = document.querySelector('#pageNumber.active');
    li.removeAttribute('class');
    li = document.querySelectorAll('#pageNumber')[page - 1];
    li.setAttribute('class', 'active');

    elements = document.querySelectorAll('ul li');
    elements[0].removeAttribute('class');
    elements[elements.length - 1].removeAttribute('class');
    elements[0].children[0].setAttribute('onClick', 'getUserList(' + (page - 1) + ')');
    elements[elements.length - 1].children[0].setAttribute('onClick', 'getUserList(' + (page + 1) + ')');

    if (page == 1) {
      elements[0].setAttribute('class', 'disabled');
      elements[0].children[0].removeAttribute('onClick');
    } else if (page == elements.length - 2) {
      elements[elements.length - 1].setAttribute('class', 'disabled');
      elements[elements.length - 1].children[0].removeAttribute('onClick');
    }
  };

  xhr.open('GET', '/users?page=' + page, true);
  xhr.send();
}