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

// BookManager.updateEmployee = employee => {
//   const url = `${baseUrl}/employees/${employee.id}`;
//   const fetchOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({employee: employee})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.employee);
//     });
//   });
// };

// BookManager.restoreEmployee = employee => {
//   employee.isCurrentEmployee = 1;
//   const url = `${baseUrl}/employees/${employee.id}`;
//   const fetchOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({employee: employee})
//   };
//   return fetch(url, fetchOptions).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve(null));
//     }
//     return response.json().then(jsonResponse => {
//       return camelcaseKeys(jsonResponse.employee);
//     });
//   });
// };

// BookManager.deleteEmployee = id => {
//   const url = `${baseUrl}/employees/${id}`;
//   const fetchOptions = {
//     method: 'DELETE'
//   };
//   return fetch(url, fetchOptions);
// };

// BookManager.getMenus = () => {
//   const url = `${baseUrl}/menus`;

//   return fetch(url).then(response => {
//     if (!response.ok) {
//       return new Promise(resolve => resolve([]));
//     }
//     return response.json().then(jsonResponse => {
//       return jsonResponse.menus.map(menu => camelcaseKeys(menu));
//     });
//   });
// };

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

// BookManager.createMenuItem = (menuItem, menuId) => {
//   const url = `${baseUrl}/menus/${menuId}/menu-items`;
//   const fetchOptions = {
//     method: 'POST',
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