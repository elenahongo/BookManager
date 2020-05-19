const BookManager = {};
const baseUrl = 'http://localhost:4001/api';

BookManager.getBooks = () => {
  const url = `${baseUrl}/books`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.books;
    });
  });
};

BookManager.getLists = () => {
  const url = `${baseUrl}/lists`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.lists;
    });
  });
};

BookManager.createBook = book => {
  const url = `${baseUrl}/books`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({book: book})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.book;
    });
  });
};

BookManager.createList = (title, books) => {
  const url = `${baseUrl}/lists`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title,
                          books: books})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.list;
    });
  });
};

BookManager.updateBook = book => {
  const url = `${baseUrl}/books/${book.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({book: book})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.book;
    });
  });
};

BookManager.deleteBook = id => {
  const url = `${baseUrl}/books/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

BookManager.deleteList = id => {
  const url = `${baseUrl}/lists/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

export default BookManager;