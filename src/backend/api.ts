var Router = require('express');

var TODOS = [
  { id: 0, value: 'Setup angular 2 structure', created_at: new Date(), completed: true },
  { id: 1, value: 'add tests', created_at: new Date(), completed: true },
  { id: 2, value: 'implement test page example', created_at: new Date(), completed: true },
  { id: 3, value: 'implement lazy load module example', created_at: new Date(), completed: true },
  { id: 4, value: 'setup angular universal', created_at: new Date(), completed: true },
  { id: 5, value: 'setup express with SSR support', created_at: new Date(), completed: false },
  { id: 6, value: 'include production environment with AOT compilation', created_at: new Date(), completed: false },
  { id: 7, value: 'create a repo', created_at: new Date(), completed: false }
];

export function createTodoApi() {

  var router = Router()

  router.route('/todos')
    .get(function(req, res) {
      // 70ms latency
      setTimeout(function() {
        res.json(TODOS);
      }, 0);
    })

  return router;
};
