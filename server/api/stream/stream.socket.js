(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var stream = require('./stream.model');
    exports.register = function(socket) {
      stream.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      stream.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('streams:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('streams:remove', doc);
    }

})();