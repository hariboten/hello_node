# This script may require sudo
# note !
#  hello_node require node version 12

apt update
apt install nodejs npm
npm install n -g
n 12
node -v

# reference
#  https://qiita.com/seibe/items/36cef7df85fe2cefa3ea
