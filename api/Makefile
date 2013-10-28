# The purpose of this Makefile is helping this project's contributors to setup
# a working environment. To do so, simply execute:
#
#     make
#
# This will, hopefully, download all the developer dependencies and get you
# started immediately. If this is not the case, please report an issue.
#
# @todo Check if XDebug is installed
# @todo Check if mcrypt is installed

.PHONY: update clean docs

all: vendor
	# Dependencies installed/upgraded successfully

vendor: composer.phar
	[ -s composer.lock ] && php composer.phar update || php composer.phar install

composer.phar:
	curl -sS https://getcomposer.org/installer | php

clean:
	rm -Rf vendor composer.phar composer.lock
