(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var podio = require('./podio.model');
    exports.register = function(socket) {
      podio.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      podio.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('podios:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('podios:remove', doc);
    }

})();