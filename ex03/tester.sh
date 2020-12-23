#!/bin/bash

check()
{
	if [ $? -eq 0 ] ;then
		echo "OK"
	else
		echo "ERROR"
	fi
}

echo "test ex03"

echo "case1 simple a"
arg="/etc/passwd"
test `node io.js $arg` = `cat $arg | wc -l`
check

echo "case2 simple b"
arg="./io.js"
test `node io.js $arg` = `cat $arg | wc -l`
check

echo "case3 no arg"
node io.js > /dev/null
check

echo "case4 too many arg"
node io.js io.js io.js > /dev/null
check

echo "case5 ghost file"
node io.js ghost > /dev/null
check
