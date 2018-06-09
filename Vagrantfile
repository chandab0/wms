$install=<<SCRIPT
if [ -f "~/vagrant_provision" ]; then
    exit 0
fi
echo "Updating package lists..."
apt-get --no-install-recommends update -y
apt-get --no-install-recommends install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common -y
apt-get --no-install-recommends update -y
apt-get --no-install-recommends install systemd -y
echo "Installing NodeJs..."
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get --no-install-recommends install -y nodejs
cd /vagrant/
npm install --no-bin-links
touch ~/vagrant_provision
chmod 777 /vagrant
SCRIPT

$installnpm=<<SCRIPT
if [ -f "~/vagrant_provision" ]; then
    exit 0
fi
mkdir ~/.npm
npm config set prefix ~/.npm
echo "export PATH=~/.npm/bin:$PATH" >> /home/vagrant/.profile
. ~/.profile
npm install -g forever webpack@4.8.3 webpack-cli@2.1.3
touch ~/vagrant_provision
SCRIPT

$runapp=<<SCRIPT
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo "Running server in dev mode"
cd /vagrant
#npm run start
SCRIPT

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    config.vm.provider "virtualbox" do |v|
        v.name = "wms"
        v.memory = 2048
        v.cpus = 2
    end
    config.vm.synced_folder ".", "/vagrant", fsnotify: true
    config.vm.provision "shell", inline: $install
	config.vm.provision "shell", inline: $installnpm, privileged: false
	config.vm.provision "shell", inline: $runapp, privileged: false, run: 'always'
end
