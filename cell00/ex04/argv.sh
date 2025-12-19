#!/bin/bash

if [ -z "$1" ]
then
	echo "No arguments supplied"
fi

if [ -n "$1" ]
then
	echo $1
fi

if [ -n "$2" ]
then
        echo $2
fi

if [ -n "$4" ]
then
        echo $4
fi
