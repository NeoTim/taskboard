(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var group = require('./group.model');
    exports.register = function(socket) {
      group.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      group.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('groups:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('groups:remove', doc);
    }

})();