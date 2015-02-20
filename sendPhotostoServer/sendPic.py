import requests
import time

url = 'http://httpbin.org/post'
files ={'file':open('head.jpeg','rb')}

r = requests.post(url,files=files)
print "posted"

print r.text
