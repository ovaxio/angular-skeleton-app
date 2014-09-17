var src_path = './src/',
    build_path = './dev/',
    prod_path = './dist/';

module.exports = {
  src : {
    basedir: src_path,
    stylus : src_path+'/stylus/*.styl',
    coffee : [src_path+'/app/main.coffee', src_path+'/app/**/module.coffee', src_path+'/app/**/*.coffee'],
    templates : src_path+'app/**/*.jade'
  },
  build : {
    basedir: build_path,
    css : build_path+'css',
    js : build_path+'js',
    templates : build_path+'templates',
    assets : build_path+'assets'
  },
  prod : {
    basedir: prod_path,
    css : prod_path+'css',
    js : prod_path+'js',
    templates : prod_path+'templates',
    assets : prod_path+'assets'
  },
  watch : {
    stylus : src_path+'/stylus/**/*.stylus',
    coffee : src_path+'/app/**/*.coffee',
    templates : src_path+'app/**/*.jade'
  }
}