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
test `node asyncio.js $arg` = `cat $arg | wc -l`
check

echo "case2 simple b"
arg="./io.js"
test `node asyncio.js $arg` = `cat $arg | wc -l`
check

echo "case3 no arg"
node asyncio.js > /dev/null
check

echo "case4 too many arg"
node asyncio.js asyncio.js asyncio.js > /dev/null
check

echo "case5 ghost file"
node asyncio.js ghost > /dev/null
check
