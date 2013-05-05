basic-express
-------------

### Getting going
Download latest node and npm from nodejs.org

Clone this repo

    git clone git@github.com:kormart/basic-express.git
    cd basic-express
    
Install modules (will use package.json)

    npm install 

Run it!

    node basic-express
    
Test it: Browse to localhost:3000/users

### Set up key-pair
https://help.github.com/articles/generating-ssh-keys

    ssh-keygen -t rsa -C "your_email@example.com"

    pbcopy < ~/.ssh/id_rsa.pub

### Basic server node.js
Following Chapter 21 of book: http://www.amazon.com/Professional-Node-js-Building-Javascript-Scalable/dp/1118185463

Code pieces online: http://www.wrox.com/WileyCDA/WroxTitle/Professional-Node-js-Building-Javascript-Based-Scalable-Software.productCd-1118185463.html




### Express, static pages in jade

### User and session handling

### Mongo database on Amazon
http://media.amazonwebservices.com/AWS_NoSQL_MongoDB.pdf
Attach EBS volume, for example to /dev/sdf

    sudo mkfs -t ext4 /dev/sdf
    sudo mkdir -p /data/db/
    sudo chown `id -u` /data/db
    sudo chown 664 /etc/fstab    
    sudo echo ‘/dev/sdf /data/db auto noatime,noexec,nodiratime 0 0’ >> /etc/fstab
    
