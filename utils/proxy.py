#!/usr/bin/env python
# coding=utf-8
import re
import os
import datetime
import time

import requests

headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
}

def getProxyList():
	try:
		url = 'http://www.66ip.cn/mo.php'
		r = requests.get(url, headers=headers, timeout=100).text
		ips = re.findall(r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b:\d{2,5}", r)
		print(str(ips))
	except Exception as e:
		print(e)

if __name__ == "__main__":
	getProxyList()