# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrant configuration for WarsawJS Workshop #22
# Unit Converter Project by Rafał Pocztarski
# https://github.com/rsp/warsawjs-workshop-22-unit-converter

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/xenial64"
  config.vm.hostname = "rsp-wjs-w20"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
  config.vm.network "forwarded_port", guest: 3333, host: 3333, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    # sudo apt-get install -y build-essential
    # sudo apt-get install -y htop mc unzip
    sudo apt-get install redis-server jq htop mc unzip -y

    h=/home/vagrant

    v10=v10.7.0
    d10=node-$v10-linux-x64
    f10=$d10.tar.xz
    u10=https://nodejs.org/dist/$v10/$f10

    mkdir -p $h/opt

    echo Downloading $u10 ...
    curl -sSO $u10
    echo Extracting $f10
    tar xf $f10
    echo Moving $d10
    mv -v $d10 $h/opt

    ln -sv $d10 $h/opt/node-v10

    ln -sv node-v10 $h/opt/node

    echo Configuring PATH and PS1 in .profile
    echo -e "\n# ---\n# rsp nw1:" >> $h/.profile
    curl -sS https://gist.githubusercontent.com/rsp/fd71cad1ba91fc1777ef0b12bb36c9dc/raw/b750e23e937a95ab47ca5ee2b31b9f38c58af798/rsp-ps1.sh >> $h/.profile
    echo 'export PATH="$HOME/opt/node/bin:$PATH"' >> $h/.profile

    echo Downloading tmux config
    # rsp tmux config 1.0:
    # curl -sSO https://gist.githubusercontent.com/rsp/f4770a1fe8ea7e2378ac3a16e01a2b53/raw/8d8755a81d274da3d43683a2ae15b41ee53f90e6/.tmux.conf
    # rsp tmux config 2.0:
    curl -sSO https://gist.githubusercontent.com/rsp/eda949a908804c3b36456a8794045a91/raw/28e981689c911dc1037a263c52994717142ddfe5/.tmux.conf

    chown -R vagrant:vagrant $h

    pwd
  SHELL

end
