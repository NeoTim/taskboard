(function(){
  'use strict';

    /**
     * Broadcast updates to client when the model changes
     */

    var note = require('./note.model');
    exports.register = function(socket) {
      note.schema.post('save', function (doc) {
        onSave(socket, doc);
      });
      note.schema.post('remove', function (doc) {
        onRemove(socket, doc);
      });
    }

    function onSave(socket, doc, cb) {
      socket.emit('notes:save', doc);
    }

    function onRemove(socket, doc, cb) {
      socket.emit('notes:remove', doc);
    }

})();