(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var github = require('./github.model');
    exports.register = function(socket) {
      github.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      github.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('githubs:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('githubs:remove', doc);
    }

})();