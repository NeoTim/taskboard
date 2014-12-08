(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var location = require('./location.model');
    exports.register = function(socket) {
      location.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      location.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('locations:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('locations:remove', doc);
    }

})();