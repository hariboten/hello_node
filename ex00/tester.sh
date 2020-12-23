echo "test ex00"
node hello-world.js > output
diff expected output
if [ $? -eq 0 ] ;then
	echo "OK"
else
	echo "ERROR"
fi
