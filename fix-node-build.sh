# Replace .coffee for .js in every require
# Don't know why the compiler doesn't do that by default

# Previous to this, use the command "yarn build-node"
find dist-node/ -name '*.js' -exec sed -i -e 's/\.coffee/\.js/g' {} \;
