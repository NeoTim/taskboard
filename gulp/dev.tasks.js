(function(){
'use strict';
  var wiredep = require('wiredep');

  module.exports = function($, client, tmp, gulp){
    console.log(tmp);
    var tasks = {
      server:   server,
      watch:    watch,
      bootstrap:bootstrap,
      scripts:  scripts,
      stylus:   stylus,
      inject:   inject,
      bower:    bower,
      templates:templates
    };

    var options = {
      inject: {
        templates: { addRootSlash:true, name: 'templates', ignorePath: '.tmp', relative: false },
        vendor: { addRootSlash:false, name: 'vendor', relative: true },
        controllers: { addRootSlash:false, name: 'tmp', relative: true },
        core: { addRootSlash:false, name: 'core', relative: true },
        modules: { addRootSlash:false, name: 'modules', relative: true },
        styles: { addRootSlash:false, name: 'styles', relative: true }
      }
    };


    return tasks;


    /////////////////////


    function server(){
      process.env.NODE_ENV = 'development';
      // return g.nodemon('./server');
      require('../server');
      return
    }

    function watch(){
      var server = $.livereload();
      $.livereload.listen()


      gulp.watch('./client/app/**/*.js').on('change', function(file) {
        console.log('Changed', file)
        server.changed(file.path);
      });

      gulp.watch('./client/app', ['templates:dev', 'scripts:dev', 'inject:dev'])

      gulp.watch(['./client/app/**/*.jade'], ['templates:dev', server.changed]);

      gulp.watch('./client/app/styles/bootstrap/**/*.styl', ['bootstrap', server.changed]);

      gulp.watch('./client/app/**/*.styl', ['stylus:dev', server.changed]);
      gulp.watch('./client/app/**/style', ['stylus:dev', server.changed]);

      gulp.watch(['./client/app/**/*.html', './client/index.html']).on('change', function(file) {
        console.log('Changed', file)
        server.changed(file.path);
      });
      gulp.watch('../client/app/**/*.css').on('change', function(file) {
        console.log('Changed', file)
        server.changed(file.path);
      });
    }

    function scripts(){

       return gulp.src( client.scripts )
        .pipe( $.jshint() )
        .pipe( $.jshint.reporter('jshint-stylish'))
    }
    function stylus(){
      return gulp.src(client.stylus)
        .pipe($.stylus())
        .pipe($.rename('styl.css'))
        .pipe(gulp.dest(client.coreStyles))
        // .pipe($.livereload())
    }
    function bootstrap(){
      return gulp.src(client.bootstrap)
        .pipe($.stylus())
        .pipe($.rename('bootstrap.stylus.css'))
        .pipe(gulp.dest(client.bootstrapDest))
        // .pipe($.livereload())
    }

    function templates(){
      return gulp.src(client.jade)
        .pipe( $.jade() )
        .pipe( $.angularTemplatecache('templates.js', {module:'asd'}))

        .pipe( gulp.dest(tmp.root) )
    }

    function inject(){
      console.log(tmp);
      var templ = gulp.src(tmp.templates, {read:false});
      var vendor = gulp.src( client.vendor, {read:false} );
      var core = gulp.src( client.core, {read:false} );
      var modules = gulp.src( client.modules, {read:false} );
      var styles = gulp.src( client.styles, {read:false} );
      var controllers = gulp.src( client.controllers, {read:false} );

      return gulp.src( client.index )
        .pipe( $.inject( templ, options.inject.templates ) )
        .pipe( $.inject( vendor, options.inject.vendor ) )
        .pipe( $.inject( core, options.inject.core ) )
        .pipe( $.inject( modules, options.inject.modules ) )
        .pipe( $.inject( styles, options.inject.styles ) )
        .pipe( $.inject( controllers, options.inject.controllers ) )
        .pipe( gulp.dest( client.root ) )
    }

    function bower(){

      var wire = wiredep.stream;

      return gulp.src( client.index )
        .pipe( wire({
          directory: client.bower
        }))
        .pipe( gulp.dest( client.root ) );
    }

  }
})();