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


// BookManager.getEmployee = id => {
//   const url = `${baseUrl}/employees/${id}`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.employee);
//     });
//   });
// };

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


// BookManager.getMenu = id => {
//   const url = `${baseUrl}/menus/${id}`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.menu);
//     });
//   });
// };

// BookManager.createMenu = menu => {
//   const url = `${baseUrl}/menus`;
//   const fetchOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({menu: menu})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.menu);
//     });
//   });
// };

// BookManager.updateMenu = menu => {
//   const url = `${baseUrl}/menus/${menu.id}`;
//   const fetchOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({menu: menu})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.menu);
//     });
//   });
// };

// BookManager.deleteMenu = id => {
//   const url = `${baseUrl}/menus/${id}`;
//   const fetchOptions = {
//     method: 'DELETE'
//   };
//   return fetch(url, fetchOptions);
// };

// BookManager.getMenuItems = menuId => {
//   const url = `${baseUrl}/menus/${menuId}/menu-items`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve([]));
//     }
//     return response.json().then(jsonResponse => {
//       return jsonResponse.menuItems.map(menuItem => camelcaseKeys(menuItem));
//     });
//   });
// };



// BookManager.updateMenuItem = (menuItem, menuId) => {
//   const url = `${baseUrl}/menus/${menuId}/menu-items/${menuItem.id}`;
//   const fetchOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({menuItem: menuItem})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.menuItem);
//     });
//   });
// };

// BookManager.deleteMenuItem = (menuItemId, menuId) => {
//   const url = `${baseUrl}/menus/${menuId}/menu-items/${menuItemId}`;
//   const fetchOptions = {
//     method: 'DELETE'
//   };
//   return fetch(url, fetchOptions);
// };

// BookManager.getTimesheets = employeeId => {
//   const url = `${baseUrl}/employees/${employeeId}/timesheets`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve([]));
//     }
//     return response.json().then(jsonResponse => {
//       return jsonResponse.timesheets.map(timesheet => camelcaseKeys(timesheet));
//     });
//   });
// };

// BookManager.createTimesheet = (timesheet, employeeId) => {
//   const url = `${baseUrl}/employees/${employeeId}/timesheets`;
//   const fetchOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({timesheet: timesheet})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.timesheet);
//     });
//   });
// };

// BookManager.updateTimesheet = (timesheet, employeeId) => {
//   const url = `${baseUrl}/employees/${employeeId}/timesheets/${timesheet.id}`;
//   const fetchOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({timesheet: timesheet})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.timesheet);
//     });
//   });
// };

// BookManager.deleteTimesheet = (timesheetId, employeeId) => {
//   const url = `${baseUrl}/employees/${employeeId}/timesheets/${timesheetId}`;
//   const fetchOptions = {
//     method: 'DELETE'
//   };
//   return fetch(url, fetchOptions);
// };

export default BookManager;