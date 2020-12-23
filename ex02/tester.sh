#!/bin/bash
check()
{
	if [ $? -eq 0 ] ;then
		echo "OK"
	else
		echo "ERROR"
	fi
}

echo "test ex02"

echo "case1 no param given"
node sum_args.js > output
diff output empty
check

echo "case2 simple a"
args=("1" "2" "3")
expected="6"
test `node sum_args ${args[@]}` = $expected
check

echo "case2 simple b"
args=("10" "200" "3000" "40000" "500000")
expected="543210"
test `node sum_args ${args[@]}` = $expected
check

echo "case2 simple c"
args=("42")
expected="42"
test `node sum_args ${args[@]}` = $expected
check

echo "case3 too big number"
args=("1000000000000000000000000000000000000000000")
expected="1e+42"
test `node sum_args ${args[@]}` = $expected
check
