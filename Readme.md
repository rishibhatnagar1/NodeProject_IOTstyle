#NodeProjects

So I am pretty new to writing servers. I have worked a little bit with Javascript and that spiked my interest to see how could I use that to write server side code. Here is were I will be updating all the code for servers.

###Will be using Node.Js, Express and Exprestify
for building servers and experimenting with them, the aim to learn more about all of these and then host on Heroku or local dev servers.So that I can use them in my #IoT projects

I know my code is not of the best quality but I have tried to keep it well commented and given credits to the people who I have taken help from. 
As always you can connect with me if there is anything you need.

quick tip : if you are working with local host and you are not able to run a new server because old one is listening at the same port, do the following:

$ lsof -n -i4TCP:portNumber   In my case it was port 3000
You will see the portNumbers and the PIDs associted to it, if it is in CLOSE_Wait condition, do the following:

$ kill -s SIGKILL pid     PID was 2100

I will be experimenting with socket.io for the next few weeks, might be writing all the servers in the same. Will keep you posted.

