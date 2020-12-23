echo "test ex01"
node vars.js > output
diff output expected
if [ $? -eq 0 ] ;then
	echo "OK"
else
	echo "ERROR"
fi
