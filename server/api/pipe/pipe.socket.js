(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var pipe = require('./pipe.model');
    exports.register = function(socket) {
      pipe.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      pipe.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('pipes:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('pipes:remove', doc);
    }

})();