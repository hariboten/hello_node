# This script may require sudo
# note !
#  hello_node require node version 12

apt update
apt install nodejs npm
npm install n -g
n 12
node -v
npm install bl -g
export NODE_PATH=`node root -g`

# reference
#  https://qiita.com/seibe/items/36cef7df85fe2cefa3ea
#  https://qiita.com/shintarogit-on-qiita/items/70f193829f4360dca771
